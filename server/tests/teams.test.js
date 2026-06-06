import 'dotenv/config';
import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { beforeAll, afterEach, afterAll, describe, it, expect } from '@jest/globals';
import app from '../app.js';

let mongo;
let token;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  await mongoose.connect(mongo.getUri());

  // Register a user and store the token for authenticated requests
  const res = await request(app)
    .post('/api/auth/register')
    .send({ email: 'test@test.com', password: 'password123' });
  token = res.body.token;
});

afterEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
  // Re-register after each clear since afterEach wipes the user too
  const res = await request(app)
    .post('/api/auth/register')
    .send({ email: 'test@test.com', password: 'password123' });
  token = res.body.token;
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongo.stop();
});

describe('GET /api/teams', () => {
  it('returns an empty array when user has no teams', async () => {
    const res = await request(app)
      .get('/api/teams')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('rejects requests with no token', async () => {
    const res = await request(app).get('/api/teams');
    expect(res.status).toBe(401);
  });
});

describe('POST /api/teams', () => {
  it('saves a team and returns it', async () => {
    const res = await request(app)
      .post('/api/teams')
      .set('Authorization', `Bearer ${token}`)
      .send({ game: 'red-blue', slots: ['pikachu', null, null, null, null, null] });
    expect(res.status).toBe(200);
    expect(res.body.game).toBe('red-blue');
    expect(res.body.slots[0]).toBe('pikachu');
  });

  it('updates an existing team for the same game', async () => {
    await request(app)
      .post('/api/teams')
      .set('Authorization', `Bearer ${token}`)
      .send({ game: 'red-blue', slots: ['pikachu', null, null, null, null, null] });
    const res = await request(app)
      .post('/api/teams')
      .set('Authorization', `Bearer ${token}`)
      .send({ game: 'red-blue', slots: ['pikachu', 'charmander', null, null, null, null] });
    expect(res.status).toBe(200);
    expect(res.body.slots[1]).toBe('charmander');
  });

  it('rejects requests with no token', async () => {
    const res = await request(app)
      .post('/api/teams')
      .send({ game: 'red-blue', slots: ['pikachu', null, null, null, null, null] });
    expect(res.status).toBe(401);
  });
});
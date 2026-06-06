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
  const res = await request(app)
    .post('/api/auth/register')
    .send({ email: 'test@test.com', password: 'password123' });
  token = res.body.token;
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongo.stop();
});

// Helper to add an encounter and return it
const addEncounter = (t, overrides = {}) =>
  request(app)
    .post('/api/encounters')
    .set('Authorization', `Bearer ${t}`)
    .send({
      game: 'red-blue',
      pokemon: 'pidgey',
      nickname: 'Pudgey',
      location: 'Route 1',
      ...overrides
    });

describe('GET /api/encounters/:game', () => {
  it('returns an empty array when user has no encounters', async () => {
    const res = await request(app)
      .get('/api/encounters/red-blue')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('rejects requests with no token', async () => {
    const res = await request(app).get('/api/encounters/red-blue');
    expect(res.status).toBe(401);
  });
});

describe('POST /api/encounters', () => {
  it('adds a new encounter and returns it', async () => {
    const res = await addEncounter(token);
    expect(res.status).toBe(201);
    expect(res.body.pokemon).toBe('pidgey');
    expect(res.body.nickname).toBe("Pudgey");
    expect(res.body.alive).toBe(true);
  });

  it('rejects requests with no token', async () => {
    const res = await request(app)
      .post('/api/encounters')
      .send({ game: 'red-blue', pokemon: 'pidgey', location: 'Route 1' });
    expect(res.status).toBe(401);
  });
});

describe('PATCH /api/encounters/:id/toggle', () => {
  it('toggles alive status from true to false', async () => {
    const added = await addEncounter(token);
    const res = await request(app)
      .patch(`/api/encounters/${added.body._id}/toggle`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.alive).toBe(false);
  });

  it('rejects requests with no token', async () => {
    const added = await addEncounter(token);
    const res = await request(app)
      .patch(`/api/encounters/${added.body._id}/toggle`);
    expect(res.status).toBe(401);
  });
});

describe('DELETE /api/encounters/:id', () => {
  it('deletes an encounter successfully', async () => {
    const added = await addEncounter(token);
    const res = await request(app)
      .delete(`/api/encounters/${added.body._id}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
  });

  it('rejects requests with no token', async () => {
    const added = await addEncounter(token);
    const res = await request(app)
      .delete(`/api/encounters/${added.body._id}`);
    expect(res.status).toBe(401);
  });
});
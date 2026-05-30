const BASE_URL = "http://localhost:5000/api";

const headers = (token) => ({
  "Content-Type": "application/json",
  ...(token && { Authorization: `Bearer ${token}` })
});

// Auth
export const registerUser = async (email, password) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ email, password })
  });
  return res.json();
};

export const loginUser = async (email, password) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ email, password })
  });
  return res.json();
};

// Teams
export const fetchTeams = async (token) => {
  const res = await fetch(`${BASE_URL}/teams`, {
    headers: headers(token)
  });
  return res.json();
};

export const saveTeam = async (token, game, slots) => {
  const res = await fetch(`${BASE_URL}/teams`, {
    method: "POST",
    headers: headers(token),
    body: JSON.stringify({ game, slots })
  });
  return res.json();
};

// Encounters
export const fetchEncounters = async (token, game) => {
  const res = await fetch(`${BASE_URL}/encounters/${game}`, {
    headers: headers(token)
  });
  return res.json();
};

export const addEncounter = async (token, encounter) => {
  const res = await fetch(`${BASE_URL}/encounters`, {
    method: "POST",
    headers: headers(token),
    body: JSON.stringify(encounter)
  });
  return res.json();
};

export const toggleEncounter = async (token, id) => {
  const res = await fetch(`${BASE_URL}/encounters/${id}/toggle`, {
    method: "PATCH",
    headers: headers(token)
  });
  return res.json();
};

export const deleteEncounter = async (token, id) => {
  const res = await fetch(`${BASE_URL}/encounters/${id}`, {
    method: "DELETE",
    headers: headers(token)
  });
  return res.json();
};
import axios from "axios";

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

/* Requições Post */

function signUp(body) {
  return axios.post(`${URL}/auth/sign-up`, body);
}

function logIn(body) {
  return axios.post(`${URL}/auth/login`, body);
}

function createHabit(body, token) {
  const promise = axios.post(`${URL}/habits`, body, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return promise;
}

function checkHabit(id, token) {
  return axios.post(
    `${URL}/habits/${id}/check`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
}

function uncheckHabit(id, token) {
  return axios.post(
    `${URL}/habits/${id}/uncheck`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
}

/* Requições Get */

function getHabits(token) {
  return axios.get(`${URL}/habits`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

function getTodayHabits(token) {
  return axios.get(`${URL}/habits/today`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

function getHistory(token) {
  return axios.get(`${URL}/habits/history/daily`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

/* Requições Delete */

function deleteHabits(id, token) {
  return axios.delete(`${URL}/habits/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export {
  signUp,
  logIn,
  createHabit,
  checkHabit,
  uncheckHabit,
  getHabits,
  getTodayHabits,
  getHistory,
  deleteHabits,
};

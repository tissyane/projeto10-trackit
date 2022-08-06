import axios from "axios";

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

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

function getHabits(token) {
  const promise = axios.get(`${URL}/habits`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return promise;
}

function getTodayHabits(token) {
  const promise = axios.get(`${URL}/habits/today`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return promise;
}

/* Requições Get 

/* Para mostrar histórico */

function getHistory() {
  const promise = axios.get(`${URL}/habits/history/daily`);
  return promise;
}

/* Requições Delete

Para deletar hábitos */

function deleteHabits() {
  const promise = axios.delete(`${URL}/habits/ID_DO_HABITO`);
  return promise;
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

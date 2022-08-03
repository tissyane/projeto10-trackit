import axios from "axios";

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function signUp(body) {
  return axios.post(`${URL}/auth/sign-up`, body);
}

/* Requições Post*/

/* Para fazer login */

function logIn(body) {
  const promise = axios.post(`${URL}/auth/login`, body);
  return promise;
}

/* Para criar hábito */

function createHabit(body) {
  const promise = axios.post(`${URL}/habits`, body);
  return promise;
}

/* Para concluir hábito */

function checkHabit(body) {
  const promise = axios.post(`${URL}/habits/ID_DO_HABITO/check`, body);
  return promise;
}

/* Para desmarcar hábito */

function uncheckHabit(body) {
  const promise = axios.post(`${URL}/habits/ID_DO_HABITO/uncheck`, body);
  return promise;
}

/* Requições Get 

Para mostrar hábitos */

function getHabits() {
  const promise = axios.get(`${URL}/habits`);
  return promise;
}

/* Para mostrar hábitos do dia */

function getTodayHabits() {
  const promise = axios.get(`${URL}/habits/today`);
  return promise;
}

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

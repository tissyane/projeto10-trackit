function getUser() {
  const data = localStorage.getItem("user");
  return data ? JSON.parse(data) : null;
}

function setUser(data) {
  return localStorage.setItem("user", JSON.stringify(data));
}

export { getUser, setUser };

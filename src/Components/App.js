import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "../Styles/GlobalStyles";
import Context from "./Context";

import Login from "./logIn/LogIn";
import SignUp from "./signUp/SignUp";
import Today from "./today/Today";
import Habits from "./habits/Habits";
import Historic from "./historic/Historic";

export default function App() {
  const [login, setLogin] = useState(null);

  return (
    <>
      <GlobalStyle />
      <Context.Provider value={{ login, setLogin }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/historico" element={<Historic />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

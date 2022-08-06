import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "../Styles/GlobalStyles";

import Login from "./logIn/LogIn";
import SignUp from "./signUp/SignUp";
import Habits from "./habits/Habits";
import Historic from "./historic/Historic";
import Context from "./contexts/Context";
import TodayPage from "./today/TodayPage";

export default function App() {
  const [login, setLogin] = useState(null);
  const [percentage, setPercentage] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Context.Provider value={{ login, setLogin, percentage, setPercentage }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/hoje" element={<TodayPage />} />
            <Route path="/historico" element={<Historic />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

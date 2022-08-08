import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "../Styles/GlobalStyles";

import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import HabitsPage from "../Pages/HabitsPage";
import TodayPage from "../Pages/TodayPage";
import HistoricPage from "../Pages/HistoricPage";
import Context from "./contexts/Context";

export default function App() {
  const [login, setLogin] = useState(null);
  const [percentage, setPercentage] = useState(null);

  return (
    <>
      <GlobalStyle />
      <Context.Provider value={{ login, setLogin, percentage, setPercentage }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
            <Route path="/hoje" element={<TodayPage />} />
            <Route path="/historico" element={<HistoricPage />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "../Styles/GlobalStyles";

import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import HabitsPage from "../Pages/HabitsPage";
import TodayPage from "../Pages/TodayPage";
import HistoricPage from "../Pages/HistoricPage";

import PrivatePage from "../Components/commons/PrivatePage";

import Context from "./contexts/Context";

import { getUser } from "../Services/Storage";

export default function App() {
  const [login, setLogin] = useState(getUser());
  const [percentage, setPercentage] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Context.Provider value={{ login, setLogin, percentage, setPercentage }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route
              path="/habitos"
              element={
                <PrivatePage>
                  <HabitsPage />
                </PrivatePage>
              }
            />
            <Route
              path="/hoje"
              element={
                <PrivatePage>
                  <TodayPage />
                </PrivatePage>
              }
            />
            <Route
              path="/historico"
              element={
                <PrivatePage>
                  <HistoricPage />
                </PrivatePage>
              }
            />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

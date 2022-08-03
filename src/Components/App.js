import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "../Commons/Styles/GlobalStyles";
import Context from "./Context";

import Habits from "./Habits/Habits";
import Login from "./logIn/logIn";
import SignUp from "./signUp/SignUp";

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

            {/*  <Route path="/hoje" element={<Today />} />
                    <Route path="/habitos" element={<Habits />} /> 
          <Route path="/historico" element={<Historic />} />  */}
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

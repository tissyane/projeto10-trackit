import { useState } from "react";

import Header from "../commons/Header";
import Menu from "../commons/Menu";
import { Page } from "../../Styles/Page";
import { Title } from "../../Styles/Title";
import { Button } from "../../Styles/Button";
import styled from "styled-components";
import HabitsForm from "./HabitsForm";
import ContextHabits from "../Contexts/ContextHabits";

export default function Habits() {
  const [showForm, setShowForm] = useState(false);
  const [habit, setHabit] = useState("");
  const [days, setDays] = useState([]);
  const [userHabits, setUserHabits] = useState([null]);

  return (
    <ContextHabits.Provider
      value={{ setShowForm, habit, setHabit, days, setDays, setUserHabits }}
    >
      <Header />
      <Page>
        <Top>
          <Title>Meus hábitos</Title>
          <SmallButton onClick={() => setShowForm(true)}>+</SmallButton>
        </Top>
        {showForm ? <HabitsForm /> : ""}
        <div>
          if (userHabits.length === 0){" "}
          {"Você ainda não tem nenhum hábito cadastrado"}
        </div>
      </Page>

      <Menu />
    </ContextHabits.Provider>
  );
}

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SmallButton = styled(Button)`
  width: 40px;
  height: 35px;
`;

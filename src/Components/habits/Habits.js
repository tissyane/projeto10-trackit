import { useEffect, useState, useContext } from "react";

import Context from "../contexts/Context";
import ContextHabits from "../contexts/ContextHabits";

import styled from "styled-components";
import { Page } from "../../Styles/Page";
import { Title } from "../../Styles/Title";
import { Button } from "../../Styles/Button";

import Header from "../commons/Header";
import Menu from "../commons/Menu";
import HabitsForm from "./HabitsForm";

import { getHabits } from "../../Services/api";

import { HabitItem } from "./HabitItem";

export default function Habits() {
  const [showForm, setShowForm] = useState(false);
  const [habit, setHabit] = useState("");
  const [days, setDays] = useState([]);
  const [userHabits, setUserHabits] = useState([]);
  const { login } = useContext(Context);

  function showHabits() {
    const promise = getHabits(login.token);
    promise.then((response) => {
      setUserHabits(response.data);
    });

    promise.catch((error) => {
      alert("Erro ao mostrar hábitos");
    });
  }

  useEffect(showHabits, [login.token]);

  return (
    <ContextHabits.Provider
      value={{
        setShowForm,
        habit,
        setHabit,
        days,
        setDays,
        userHabits,
        setUserHabits,
        showHabits,
      }}
    >
      <Header />
      <Page>
        <Top>
          <Title>Meus hábitos</Title>
          <SmallButton onClick={() => setShowForm(true)}>+</SmallButton>
        </Top>
        {showForm ? <HabitsForm /> : ""}
        <HabitSection>
          {userHabits.length === 0 ? (
            <span>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </span>
          ) : (
            <RenderHabits>
              {userHabits.map((userhabit) => (
                <HabitItem key={userhabit.id} userhabit={userhabit} />
              ))}
            </RenderHabits>
          )}
        </HabitSection>
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

const HabitSection = styled.div`
  margin-top: 28px;
  span {
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;
  }
`;

const RenderHabits = styled.div`
  margin-top: 10px;
`;

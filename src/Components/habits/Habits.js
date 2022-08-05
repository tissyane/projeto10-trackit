import { useEffect, useState } from "react";
import { useContext } from "react";
import Header from "../commons/Header";
import Menu from "../commons/Menu";
import { Page } from "../../Styles/Page";
import { Title } from "../../Styles/Title";
import { Button } from "../../Styles/Button";
import styled from "styled-components";
import HabitsForm from "./HabitsForm";
import Context from "../Contexts/Context";
import ContextHabits from "../Contexts/ContextHabits";
import { getHabits } from "../../Services/api";
import { BtnDay } from "../../Styles/BtnDay";
import { BsTrash } from "react-icons/bs";

function HabitItem({ userhabit, index }) {
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
  return (
    <HabitWrapper>
      <Container key={userhabit.id}>
        <h4>{userhabit.name}</h4>
        <div>
          {weekdays.map((weekday, index) => (
            <BtnDay
              key={index}
              disabled
              clicked={userhabit.days.includes(index)}
            >
              {weekday}
            </BtnDay>
          ))}
        </div>
      </Container>
      <Trash>
        <BsTrash />
      </Trash>
    </HabitWrapper>
  );
}

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

const Container = styled.div``;
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

const HabitWrapper = styled.div`
  height: 91px;
  margin: 10px 0;
  padding: 0 10px 18px 15px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
  }

  div {
    margin-top: 10px;
  }
`;

const Trash = styled.div`
  margin-top: 11px;
`;

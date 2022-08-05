import { useEffect, useState, useContext } from "react";
import Context from "../Contexts/Context";
import Header from "../commons/Header";
import Menu from "../commons/Menu";
import { Page } from "../../Styles/Page";
import { Title } from "../../Styles/Title";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import updateLocale from "dayjs/plugin/updateLocale";
import { BsCheckLg } from "react-icons/bs";
import { getTodayHabits } from "../../Services/api";
import styled from "styled-components";

function TodayHabitsItem({ userhabit }) {
  return (
    <TodayWrapper>
      <Container key={userhabit.id}>
        <h4>{userhabit.name}</h4>
        <p>{`Sequência atual:${userhabit.currentSequence} dias`}</p>
        <p>{`Seu recorde: ${userhabit.highestSequence} dias`}</p>
      </Container>
      <Check>
        <BsCheckLg color="#FFF" fontSize={30} />
      </Check>
    </TodayWrapper>
  );
}

export default function Today() {
  const { login } = useContext(Context);
  const [todayHabit, setTodayHabit] = useState([]);
  dayjs.locale("pt-br");
  dayjs.extend(updateLocale);
  dayjs.updateLocale("pt-br", {
    weekdays: [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ],
  });

  function todayHabits() {
    const promise = getTodayHabits(login.token);
    promise.then((response) => {
      setTodayHabit(response.data);
    });

    promise.catch((error) => {
      alert("Erro ao mostrar hábitos");
    });
  }

  useEffect(todayHabits, [login.token]);

  return (
    <>
      <Header />
      <Page>
        <Title>{dayjs().format("dddd, DD/MM")}</Title>
        {todayHabit.map((userhabit) => (
          <TodayHabitsItem key={userhabit.id} userhabit={userhabit} />
        ))}
      </Page>
      <Menu />
    </>
  );
}

const Container = styled.div`
  margin-top: 0;
`;

const TodayWrapper = styled.div`
  height: 91px;
  margin: 10px 0;
  padding: 15px 13px 12px 15px;
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 7px;
  }

  p {
    font-size: 12.976px;
    line-height: 16px;

    color: #666666;
  }
`;

const Check = styled.div`
  width: 69px;
  height: 69px;
  background-color: #e7e7e7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

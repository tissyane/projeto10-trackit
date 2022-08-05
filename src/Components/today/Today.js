import { useEffect, useState, useContext } from "react";

import Context from "../Contexts/Context";

import styled from "styled-components";
import { Page } from "../../Styles/Page";
import { Title } from "../../Styles/Title";

import Header from "../commons/Header";
import Menu from "../commons/Menu";

import { getTodayHabits } from "../../Services/api";

import { BsCheckLg } from "react-icons/bs";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import updateLocale from "dayjs/plugin/updateLocale";

function TodayHabitsItem({ userhabit }) {
  return (
    <TodayWrapper>
      <div key={userhabit.id}>
        <h4>{userhabit.name}</h4>
        <p>
          {userhabit.currentSequence === 1
            ? `Sequência atual: ${userhabit.currentSequence} dia`
            : `Sequência atual: ${userhabit.currentSequence} dias`}
        </p>
        <p>
          {userhabit.currentSequence === 1
            ? `Seu recorde: ${userhabit.currentSequence} dia`
            : `Seu recorde: ${userhabit.currentSequence} dias`}
        </p>
      </div>
      <Check>
        <BsCheckLg color="#FFF" fontSize={30} />
      </Check>
    </TodayWrapper>
  );
}

export default function Today() {
  const { login, percentage, setPercentage } = useContext(Context);

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
        <Subtitle>
          {percentage === 0 ? (
            <span className="none">Nenhum hábito concluído ainda</span>
          ) : (
            <span className="done">{`${percentage}% dos hábitos concluídos`}</span>
          )}
        </Subtitle>

        {todayHabit.map((userhabit) => (
          <TodayHabitsItem key={userhabit.id} userhabit={userhabit} />
        ))}
      </Page>
      <Menu />
    </>
  );
}

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
    margin-bottom: 6px;
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

  background: #ebebeb;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Subtitle = styled.div`
  margin-bottom: 28px;
  font-size: 17.976px;
  line-height: 22px;

  .none {
    color: #bababa;
  }

  .done {
    color: #8fc549;
  }
`;

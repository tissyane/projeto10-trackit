import { useEffect, useState, useContext } from "react";

import Context from "../Components/contexts/Context";

import styled from "styled-components";
import { Page } from "../Styles/Page";
import { Title } from "../Styles/Title";

import Header from "../Components/commons/Header";
import Menu from "../Components/commons/Menu";
import Loading from "../Components/commons/Loading";

import TodayHabitsItem from "../Components/today/TodayHabitsItem";

import { getTodayHabits } from "../Services/api";

import dayjs from "dayjs";

import updateLocale from "dayjs/plugin/updateLocale";
import "dayjs/locale/pt-br";

export default function TodayPage() {
  const { login, percentage, setPercentage } = useContext(Context);
  const [habits, setHabits] = useState([]);

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

  function TodayHabits() {
    const promise = getTodayHabits(login.token);
    promise.then((response) => {
      setHabits(response.data);
      const sizeHabits = habits.length;
      if (sizeHabits === 0) {
        setPercentage(0);
      } else {
        const sizeCompleteHabits = habits.filter((habit) => habit.done).length;
        setPercentage(Math.round((sizeCompleteHabits * 100) / sizeHabits));
      }
    });

    promise.catch((error) => {
      alert("Erro ao mostrar hábitos");
    });
  }

  useEffect(TodayHabits, [login.token, habits, setPercentage]);

  if (habits.length === 0) {
    return (
      <Page>
        <Loading />
      </Page>
    );
  }

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

        {habits.map((habit) => (
          <TodayHabitsItem
            key={habit.id}
            habit={habit}
            setHabits={setHabits}
            TodayHabits={TodayHabits}
          />
        ))}
      </Page>
      <Menu />
    </>
  );
}

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

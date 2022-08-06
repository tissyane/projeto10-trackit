import { useEffect, useState, useContext } from "react";

import Context from "../contexts/Context";

import styled from "styled-components";
import { Page } from "../../Styles/Page";
import { Title } from "../../Styles/Title";

import Header from "../commons/Header";
import Menu from "../commons/Menu";

import { getTodayHabits } from "../../Services/api";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import updateLocale from "dayjs/plugin/updateLocale";
import { TodayHabitsItem } from "./TodayHabitsItem";

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

  useEffect(() => {
    const promise = getTodayHabits(login.token);
    promise.then((response) => {
      setHabits(response.data);
      const sizeHabits = habits?.length;
      if (!sizeHabits) {
        setPercentage(0);
      } else {
        const sizeCompleteHabits = habits.filter((habit) => habit.done).length;
        setPercentage(Math.round((sizeCompleteHabits * 100) / sizeHabits));
      }
    });
  }, [login, habits, setPercentage]);

  if (habits.Habit === null) {
    return "Carregando";
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
          <TodayHabitsItem key={habit.id} habit={habit} setHabits={setHabits} />
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

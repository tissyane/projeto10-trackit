import { useEffect, useContext, useState } from "react";
import Context from "../contexts/Context";
import Header from "../commons/Header";
import Menu from "../commons/Menu";
import { Page } from "../../Styles/Page";
import { Title } from "../../Styles/Title";
import { getHistory } from "../../Services/api";
import styled from "styled-components";

export default function Historic() {
  const [historicList, setHistoricList] = useState({});
  const { login } = useContext(Context);

  // function HistoricHabits() {
  //   const promise = getHistory(login.token);
  //   promise.then((response) => {
  //     setHistoricList(response.data);
  //     console.log(response.data);
  //   });

  //   promise.catch((error) => {
  //     alert("Erro ao mostrar historico");
  //   });
  // }

  // useEffect(HistoricHabits, [login.token]);
  return (
    <>
      <Header />
      <Page>
        <Title>Histórico</Title>
        <Text>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Text>
      </Page>
      <Menu />
    </>
  );
}

const Text = styled.div`
  margin-top: 28px;
  font-size: 17.976px;
  line-height: 22px;

  color: #666666;
`;

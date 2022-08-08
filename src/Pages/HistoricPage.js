import Header from "../Components/commons/Header";
import Menu from "../Components/commons/Menu";
import { Page } from "../Styles/Page";
import { Title } from "../Styles/Title";

import styled from "styled-components";

export default function HistoricPage() {
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

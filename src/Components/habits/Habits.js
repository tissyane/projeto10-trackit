import { useState } from "react";

import Header from "../commons/Header";
import Menu from "../commons/Menu";
import { Page } from "../../Styles/Page";
import { Title } from "../../Styles/Title";
import { Button } from "../../Styles/Button";
import styled from "styled-components";
import HabitsForm from "./HabitsForm";

export default function Habits() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Header />
      <Page>
        <Top>
          <Title>Meus hábitos</Title>
          <SmallButton onClick={() => setShowForm(true)}>+</SmallButton>
        </Top>
        {showForm ? <HabitsForm setShowForm={setShowForm} /> : ""}
      </Page>
      <Menu />
    </>
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

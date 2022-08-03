import Header from "../commons/Header";
import Menu from "../commons/Menu";
import { Page } from "../../Styles/Page";
import { Title } from "../../Styles/Title";

export default function Habits() {
  return (
    <>
      <Header />
      <Page>
        <Title>Meus hábitos</Title>
      </Page>
      <Menu />
    </>
  );
}

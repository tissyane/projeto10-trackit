import Header from "../commons/Header";
import Menu from "../commons/Menu";
import { Page } from "../../Styles/Page";
import { Title } from "../../Styles/Title";

export default function Today() {
  const dayjs = require("dayjs");

  return (
    <>
      <Header />
      <Page>
        <Title>{dayjs().format("dddd, DD/MM")} </Title>
      </Page>
      <Menu />
    </>
  );
}

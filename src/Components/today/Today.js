import Header from "../commons/Header";
import Menu from "../commons/Menu";
import { Page } from "../../Styles/Page";
import { Title } from "../../Styles/Title";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import updateLocale from "dayjs/plugin/updateLocale";
import { BsCheckLg } from "react-icons/bs";

export default function Today() {
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
  return (
    <>
      <Header />
      <Page>
        <Title>{dayjs().format("dddd, DD/MM")} </Title>

        <BsCheckLg />
      </Page>
      <Menu />
    </>
  );
}

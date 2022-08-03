import { Header } from "../../Styles/Header";
import Menu from "../commons/Menu";
import { Page } from "../../Styles/Page";
import { Title } from "../../Styles/Title";

import user from "../../assets/images/user.png";

export default function Today() {
  return (
    <>
      <Header>
        <h1>TrackIt</h1>
        <img src={user} alt="user_img" />
      </Header>
      <Page>
        <Title>Meus hábitos</Title>
      </Page>
      <Menu />
    </>
  );
}

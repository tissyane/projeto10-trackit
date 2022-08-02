import { Header } from "../../Commons/Styles/Header";
import { Menu } from "../../Commons/Styles/Menu";
import { Page } from "../../Commons/Styles/Page";
import { Title } from "../../Commons/Styles/Title";

import user from "../../assets/images/user.png";

export default function Habits() {
  return (
    <>
      <Header>
        <h1>TrackIt</h1>
        <img src={user} alt="user_img" />
      </Header>
      <Page>
        <Title>Meus hábitos</Title>
      </Page>
      <Menu>
        <div>Hábitos</div> <div>Hoje</div> <div>Histórico</div>
      </Menu>
    </>
  );
}

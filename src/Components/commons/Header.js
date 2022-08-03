import { Link } from "react-router-dom";
import styled from "styled-components";
import user from "../../assets/images/user.png";

export default function Header() {
  return (
    <Wrapper>
      <Link to="/hoje">TrackIt</Link>
      <img src={user} alt="user_img" />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  max-width: 614px;
  height: 70px;
  padding: 0 18px;
  margin: 0 auto;

  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  color: #ffffff;

  font-family: "Playball", cursive;
  font-size: 38.982px;
  line-height: 49px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
`;

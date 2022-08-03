import { Link } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import Context from "../Context";

export default function Header() {
  const { login } = useContext(Context);

  return (
    <Wrapper>
      <Link to="/hoje">
        <h1>TrackIt</h1>
      </Link>
      <img src={login.image} alt="user_img" />
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

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;

  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }

  h1 {
    font-family: "Playball", cursive;
    font-size: 38.982px;
    line-height: 49px;
  }
`;

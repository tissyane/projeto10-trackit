import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

export default function Logo() {
  return (
    <ContainerLogo>
      <img src={logo} alt="logo" />
      <h1>TrackIt</h1>
    </ContainerLogo>
  );
}

const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Playball", cursive;
  font-size: 68.982px;
  line-height: 86px;

  color: var(--dark-blue);

  img {
    width: 180px;
  }
`;

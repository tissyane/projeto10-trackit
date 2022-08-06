import { Link } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Context from "../contexts/Context";

export default function Menu() {
  const { percentage } = useContext(Context);

  return (
    <Wrapper>
      <Link to="/habitos">Hábitos</Link>

      <Link style={{ width: 90, height: 90, marginBottom: 30 }} to="/hoje">
        <CircularProgressbar
          value={percentage}
          text={`Hoje`}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#52B6FF",
            textSize: "18px",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </Link>

      <Link to="/historico">Histórico</Link>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  width: 100%;
  height: 70px;
  padding: 0 35px;
  margin: 0 auto;

  background-color: #ffffff;
  color: #52b6ff;

  font-size: 17.976px;
  line-height: 22px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  bottom: 0;
`;

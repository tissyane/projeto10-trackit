import styled from "styled-components";

export default function Menu() {
  return (
    <Wrapper>
      <div>Hábitos</div> <div>Hoje</div> <div>Histórico</div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  width: 100%;
  max-width: 614px;
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

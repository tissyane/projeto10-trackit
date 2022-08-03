import styled from "styled-components";

export const Button = styled.button`
  width: 80vw;
  height: 45px;
  border-radius: 5px;
  background-color: #52b6ff;
  color: #ffffff;
  border: none;

  font-size: 20.98px;
  line-height: 26.22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
`;

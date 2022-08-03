import styled from "styled-components";

export const Input = styled.input`
  width: 80vw;
  height: 45px;
  margin-bottom: 6px;
  padding-left: 11px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-size: 20px;
  line-height: 25px;
  background-color: #ffffff;

  &::placeholder {
    color: #d4d4d4;
  }

  &:focus {
    outline-color: var(--blue);
  }

  &:disabled {
    background-color: var(--background-gray);
    color: var(--background-gray);
  }
`;

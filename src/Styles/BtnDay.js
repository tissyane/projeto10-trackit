import styled from "styled-components";

export const BtnDay = styled.button`
  height: 30px;
  width: 30px;
  margin-right: 4px;
  background-color: ${(props) => (props.clicked ? "#CFCFCF" : "#fff")};
  color: ${(props) => (props.clicked ? "#FFF" : "#CFCFCF")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  cursor: pointer;
  font-size: 19.976px;
  line-height: 25px;

  &:disabled {
    cursor: initial;
  }
`;

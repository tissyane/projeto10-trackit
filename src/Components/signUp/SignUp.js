import { Page } from "../../Commons/Styles/Page";
import { Button } from "../../Commons/Styles/Button";
import { useEffect, useState } from "react";
import Logo from "../Commons/Logo";
import styled from "styled-components";

export default function SignUp() {
  const [form, setForm] = useState({});

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <Container>
      <Logo />
      <ContainerForm>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email"
            required
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
        </div>
        <div>
          <input
            id="senha"
            name="senha"
            type="password"
            placeholder="senha"
            pattern=""
            required
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
        </div>
        <div>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="nome"
            pattern=""
            required
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
        </div>
        <div>
          <input
            id="foto"
            name="foto"
            type="text"
            placeholder="foto"
            required
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
        </div>
        <Button type="submit">Cadastrar</Button>
      </ContainerForm>
    </Container>
  );
}
const Container = styled.div`
  padding-top: 68px;
  width: 100%;
`;

const ContainerForm = styled.form`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 492px;
    height: 45px;
    margin-bottom: 6px;
    padding-left: 11px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;

    &::placeholder {
      font-size: 19.976px;
      line-height: 25px;
      color: #d4d4d4;
    }
  }
`;

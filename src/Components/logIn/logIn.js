import { Button } from "../../Commons/Styles/Button";
import { useState } from "react";
import Logo from "../Commons/Logo";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { signUp } from "../../Services/api";

export default function SignUp() {
  const [form, setForm] = useState({});
  const [disabled, setDisabled] = useState(false);

  function handleForm({ name, value }) {
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  }

  function sendForm(e) {
    e.preventDefault();

    const promise = signUp(form);
    promise.then((response) => {});
    promise.catch((error) => {
      alert("Verifique seus dados!");
    });
  }

  return (
    <>
      <Logo />
      <Container>
        <Form>
          <div>
            <input
              name="email"
              type="email"
              placeholder="email"
              disabled={disabled}
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
              name="password"
              type="password"
              placeholder="senha"
              disabled={disabled}
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
              name="name"
              type="text"
              placeholder="nome"
              disabled={disabled}
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
              name="image"
              type="url"
              placeholder="foto"
              disabled={disabled}
              required
              onChange={(e) =>
                handleForm({
                  name: e.target.name,
                  value: e.target.value,
                })
              }
            />
          </div>
          <Button type="submit" onClick={sendForm}>
            Entrar
          </Button>
        </Form>
        <Link className="link" to="/habitos">
          Não tem uma conta? Cadastre-se!
        </Link>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .link {
    color: var(--blue);
  }
`;

const Form = styled.form`
  margin: 35px 0 25px;

  input {
    width: 80vw;
    height: 45px;
    margin-bottom: 6px;
    padding-left: 11px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-size: 20px;
    line-height: 25px;

    &::placeholder {
      color: #d4d4d4;
    }
  }
`;

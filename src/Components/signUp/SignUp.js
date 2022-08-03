import { Button } from "../../Commons/Styles/Button";
import { useState } from "react";
import Logo from "../Commons/Logo";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../Services/api";
import { ThreeDots } from "react-loader-spinner";

export default function SignUp() {
  const [form, setForm] = useState({});
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  function handleForm({ name, value }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function sendForm(e) {
    e.preventDefault();

    const promise = signUp(form);
    promise.then((response) => {
      navigate("/");
    });

    promise.catch((error) => {
      alert("Verifique seus dados!");
      setDisabled(false);
    });
    setDisabled(true);
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
          <Button type="submit" onClick={sendForm} disabled={disabled}>
            {disabled ? (
              <ThreeDots color="#FFF" height={20} width={50} />
            ) : (
              "Cadastrar"
            )}
          </Button>
        </Form>
        <Link className="link" to="/">
          Já tem uma conta? Faça login!
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
    background-color: #ffffff;

    &::placeholder {
      color: #d4d4d4;
    }

    &:disabled {
      background-color: var(--background-gray);
      color: var(--background-gray);
    }
  }
`;

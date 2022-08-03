import { Button } from "../../Commons/Styles/Button";
import { useState } from "react";
import Logo from "../Commons/Logo";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../../Services/api";
import { ThreeDots } from "react-loader-spinner";
import { Input } from "../../Commons/Input";

export default function Login() {
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

    const promise = logIn(form);
    promise.then((response) => {
      navigate("/habitos");
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
          <Input
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

          <Input
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
          <Button type="submit" onClick={sendForm} disabled={disabled}>
            {disabled ? (
              <ThreeDots color="#FFF" height={20} width={50} />
            ) : (
              "Entrar"
            )}
          </Button>
        </Form>
        <Link className="link" to="/cadastro">
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import styled from "styled-components";
import { Button } from "../../Styles/Button";
import { Input } from "../../Styles/Input";

import { signUp } from "../../Services/api";

import { ThreeDots } from "react-loader-spinner";

export default function SignUpForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });
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
      alert("Houve um erro no seu cadastro. Verifique seus dados!");
      setDisabled(false);
    });
    setDisabled(true);
  }

  return (
    <Container>
      <Form onSubmit={sendForm}>
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

        <Input
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

        <Input
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

        <Button type="submit" disabled={disabled}>
          {disabled ? (
            <ThreeDots color="#FFF" height={20} width={50} />
          ) : (
            "Cadastrar"
          )}
        </Button>
      </Form>
      <Link className="link" to="/">
        J?? tem uma conta? Fa??a login!
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .link {
    color: var(--blue);
    text-decoration: underline;
  }
`;

const Form = styled.form`
  margin: 35px 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

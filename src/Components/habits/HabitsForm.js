import { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import Context from "../Contexts/Context";
import { Input } from "../../Styles/Input";
import { createHabit } from "../../Services/api";

import ContextHabits from "../Contexts/ContextHabits";
import { ThreeDots } from "react-loader-spinner";
import { BtnDay } from "../../Styles/BtnDay";

export default function HabitsForm() {
  const {
    setShowForm,
    habit,
    setHabit,
    days,
    setDays,

    showHabits,
  } = useContext(ContextHabits);
  const [disabled, setDisabled] = useState(false);
  const { login } = useContext(Context);
  const [clicked, setClicked] = useState(false);

  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

  function handleDays(e, index) {
    e.preventDefault();
    setClicked(!clicked);
    let newDays;
    if (days.includes(index)) {
      newDays = days.filter((days) => days !== index);
    } else {
      newDays = [...days, index];
    }
    setDays(newDays);
  }

  function submitHabit(e) {
    e.preventDefault();

    const body = {
      name: habit,
      days,
    };

    const promise = createHabit(body, login.token);
    promise.then((response) => {
      showHabits();
      setShowForm(false);
      setHabit("");
      setDays([]);
    });

    promise.catch((error) => {
      alert("Erro ao cadastrar hábito");
      setDisabled(false);
    });
    setDisabled(true);
  }

  return (
    <FormWrapper onSubmit={submitHabit}>
      <InputForm
        type="text"
        name="habit"
        value={habit}
        disabled={disabled}
        placeholder="nome do hábito"
        onChange={(e) => {
          setHabit(e.target.value);
        }}
      />
      <div>
        {weekdays.map((weekday, index) => (
          <BtnDay
            disabled={disabled}
            clicked={days.includes(index)}
            onClick={(e) => handleDays(e, index)}
          >
            {weekday}
          </BtnDay>
        ))}
      </div>
      <WrapperActions>
        <button className="cancel" onClick={() => setShowForm(false)}>
          Cancelar
        </button>
        <button className="save" type="submit" disabled={disabled}>
          {disabled ? (
            <ThreeDots color="#FFF" height={20} width={50} />
          ) : (
            "Salvar"
          )}
        </button>
      </WrapperActions>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  height: 180px;
  margin: 20px 0 29px;
  padding-top: 18px;
  border-radius: 5px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    margin-top: 10px;
    margin-left: 20px;
  }
`;

const InputForm = styled(Input)`
  width: calc(100% - 40px);
  margin: 0 20px;
`;

const WrapperActions = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: end;
  align-items: center;

  button {
    font-size: 15.976px;
    line-height: 20px;
    border: none;
    cursor: pointer;
  }

  .cancel {
    background-color: var(--white);
    color: var(--blue);
  }

  .save {
    height: 35px;
    width: 84px;
    margin-left: 23px;
    background-color: var(--blue);
    color: var(--white);
    border-radius: 4.63636px;

    &:disabled {
      opacity: 0.7;
    }
  }
`;

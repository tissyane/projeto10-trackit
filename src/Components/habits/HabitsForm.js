import { useState, useContext } from "react";

import Context from "../contexts/Context";
import ContextHabits from "../contexts/ContextHabits";

import styled from "styled-components";
import { Input } from "../../Styles/Input";
import { BtnDay } from "../../Styles/BtnDay";

import { createHabit } from "../../Services/api";

import { ThreeDots } from "react-loader-spinner";

export default function HabitsForm(index) {
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
      alert(error.response.data.message);
      setDisabled(false);
    });
    setDisabled(true);
  }

  return (
    <FormWrapper onSubmit={submitHabit}>
      <InputForm
        key={index}
        type="text"
        name="habit"
        value={habit}
        disabled={disabled}
        required
        placeholder="nome do hábito"
        onChange={(e) => {
          setHabit(e.target.value);
        }}
      />
      <div className="days">
        {weekdays.map((weekday, index) => (
          <BtnDay
            key={days.id}
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
        <div key={index}>
          <button className="save" type="submit" disabled={disabled}>
            {disabled ? (
              <ThreeDots color="#FFF" height={15} width={40} />
            ) : (
              "Salvar"
            )}
          </button>
        </div>
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

  .days {
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
  width: calc(100% - 20px);
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
    margin-right: 23px;
  }

  .save {
    height: 35px;
    width: 84px;
    background-color: var(--blue);
    color: var(--white);
    border-radius: 4.63636px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
      opacity: 0.7;
    }
  }
`;

import { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import Context from "../Contexts/Context";
import { Input } from "../../Styles/Input";
import { createHabit } from "../../Services/api";
import { getHabits } from "../../Services/api";
import ContextHabits from "../Contexts/ContextHabits";

export default function HabitsForm() {
  const { setShowForm, habit, setHabit, days, setDays, setUserHabits } =
    useContext(ContextHabits);
  const [disabled, setDisabled] = useState(true);
  const { login } = useContext(Context);
  const [clicked, setClicked] = useState(false);

  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

  function showHabits() {
    const promise = getHabits(login.token);
    promise.then((response) => {
      console.log(response.data);
    });

    promise.catch((error) => {
      alert("Erro ao mostrar hábitos");
    });
  }
  showHabits();

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
    promise.then((response) => {});

    promise.catch((error) => {
      alert("Erro ao cadastrar hábito");
    });

    setShowForm(false);
  }

  return (
    <FormWrapper>
      <InputForm
        type="text"
        name="habit"
        placeholder="nome do hábito"
        onChange={(e) => {
          setHabit(e.target.value);
        }}
      />
      <div>
        {weekdays.map((weekdays, index) => (
          <BtnDays
            clicked={days.includes(index)}
            onClick={(e) => handleDays(e, index)}
          >
            {weekdays}
          </BtnDays>
        ))}
      </div>
      <WrapperActions>
        <button className="cancel" onClick={() => setShowForm(false)}>
          Cancelar
        </button>
        <button className="save" onClick={(e) => submitHabit(e)}>
          Salvar
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
    gap: 4px;
    margin-left: 20px;
  }
`;

const InputForm = styled(Input)`
  width: calc(100% - 40px);
  margin: 0 20px;
`;

const BtnDays = styled.button`
  height: 30px;
  width: 30px;
  background-color: ${(props) => (props.clicked ? "#CFCFCF" : "#fff")};
  color: ${(props) => (props.clicked ? "#FFF" : "#CFCFCF")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  font-size: 19.976px;
  line-height: 25px;

  &:disabled {
    background-color: red;
  }
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
  }
`;

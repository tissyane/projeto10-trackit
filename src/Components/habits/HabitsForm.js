import { useState } from "react";
import styled from "styled-components";
import { Input } from "../../Styles/Input";

export default function HabitsForm({ setShowForm }) {
  const [habit, setHabit] = useState("");
  const [days, setDays] = useState([]);

  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

  function checkDay() {}

  return (
    <FormWrapper>
      <InputForm
        type="text"
        placeholder="nome do hábito"
        onChange={(e) => setHabit(e.target.value)}
      />
      <div>
        {weekdays.map((weekdays, index) => (
          <BtnDays>{weekdays}</BtnDays>
        ))}
      </div>
      <BtnActions>
        <p onClick={() => setShowForm(false)}>Cancelar</p>
        <p className="save">Salvar</p>
      </BtnActions>
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
  background-color: var(--white);
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  color: var(--border-gray);
  font-size: 19.976px;
  line-height: 25px;
`;

const BtnActions = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 15.976px;
  line-height: 20px;
  color: var(--blue);
  cursor: pointer;

  .save {
    height: 35px;
    width: 84px;
    margin-left: 23px;
    background-color: var(--blue);
    color: var(--white);
    border-radius: 4.63636px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

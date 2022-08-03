import { useState } from "react";
import styled from "styled-components";
import { Input } from "../../Styles/Input";

export default function HabitsForm() {
  const [habit, setHabit] = useState("");
  const [days, setDays] = useState([]);

  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <FormWrapper>
      {/* <InputForm
        type="text"
        placeholder="nome do hábito"
        onChange={(e) => setHabit(e.target.value)}
      />
      {weekdays.map((weekdays, index) => (
        <button onClick={click}>{weekday}</button>
      ))} */}
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
`;

const InputForm = styled(Input)`
  margin: 0 auto;
`;

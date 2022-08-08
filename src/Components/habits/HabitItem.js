import { useContext } from "react";

import styled from "styled-components";
import { BtnDay } from "../../Styles/BtnDay";

import Context from "../contexts/Context";
import ContextHabits from "../contexts/ContextHabits";

import { deleteHabits, getHabits } from "../../Services/api";

import { BsTrash } from "react-icons/bs";

export default function HabitItem({ userhabit, index }) {
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const { login } = useContext(Context);
  const { setUserHabits } = useContext(ContextHabits);

  function delHabit(id) {
    if (window.confirm("Deseja mesmo remover o hábito?")) {
      const promise = deleteHabits(id, login.token);
      promise.then((response) => {
        const prom = getHabits(login.token);
        prom.then((response) => setUserHabits(response.data));
      });
    }
  }

  return (
    <HabitWrapper>
      <Container key={userhabit.id}>
        <h4>{userhabit.name}</h4>
        <div>
          {weekdays.map((weekday, index) => (
            <BtnDay
              key={index}
              disabled
              clicked={userhabit.days.includes(index)}
            >
              {weekday}
            </BtnDay>
          ))}
        </div>
      </Container>
      <Trash>
        <BsTrash cursor={"pointer"} onClick={() => delHabit(userhabit.id)} />
      </Trash>
    </HabitWrapper>
  );
}

const Container = styled.div``;

const HabitWrapper = styled.div`
  margin: 10px 0;
  padding: 0 10px 18px 15px;
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
  }

  div {
    margin-top: 10px;
  }
`;

const Trash = styled.div`
  margin-top: 11px;
`;

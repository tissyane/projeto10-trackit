import { useContext } from "react";
import Context from "../contexts/Context";
import styled from "styled-components";
import { BsCheckLg } from "react-icons/bs";
import { checkHabit, uncheckHabit } from "../../Services/api";

export function TodayHabitsItem({ habit, TodayHabits }) {
  const { login } = useContext(Context);

  function toogleCheck() {
    if (!habit.done) {
      const promise = checkHabit(habit.id, login.token);
      promise.then((response) => {
        <TodayHabits />;
      });
    } else {
      const promise = uncheckHabit(habit.id, login.token);
      promise.then((response) => {
        <TodayHabits />;
      });
    }
  }

  return (
    <TodayWrapper
      checkedHabit={habit.done}
      recordColor={
        habit.done && habit.currentSequence === habit.highestSequence
      }
    >
      <div key={habit.id}>
        <h4>{habit.name}</h4>
        <p>
          Sequência atual:{" "}
          <span>{`${habit.currentSequence} ${
            habit.currentSequence === 1 ? "dia" : "dias"
          }`}</span>
        </p>
        <p>
          Seu recorde:{" "}
          <span>{`${habit.highestSequence} ${
            habit.highestSequence === 1 ? "dia" : "dias"
          }`}</span>
        </p>
      </div>
      <Check check={habit.done}>
        <BsCheckLg onClick={toogleCheck} color="#FFF" fontSize={30} />
      </Check>
    </TodayWrapper>
  );
}

const TodayWrapper = styled.div`
  margin: 10px 0;
  padding: 15px 13px 12px 15px;
  border-radius: 5px;
  background: #ffffff;
  color: #666666;
  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 19.976px;
    line-height: 25px;

    margin-bottom: 6px;
  }

  p {
    font-size: 12.976px;
    line-height: 16px;
  }

  span:first-of-type {
    color: ${(props) => (props.checkedHabit ? "#8FC549" : "#666666 ")};
  }
  span:last-of-type {
    color: ${(props) => (props.recordColor ? "#8FC549 " : "#666666 ")};
  }
`;

const Check = styled.div`
  width: 69px;
  height: 69px;

  background: ${(props) => (props.check ? "#8FC549" : "#ebebeb ")};
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

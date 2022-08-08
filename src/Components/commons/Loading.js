import { BallTriangle } from "react-loader-spinner";
import styled from "styled-components";

export default function Loading() {
  return (
    <LoadingWrapper>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#52b6ff"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </LoadingWrapper>
  );
}

const LoadingWrapper = styled.div`
  position: fixed;
  top: calc(50% - 90px);
  left: calc(50% - 50px);
`;

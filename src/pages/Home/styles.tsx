import styled from "styled-components";

export const Wrapper = styled.div`
  width: 60vw;
  height: 500vh;
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  & > span {
    cursor: pointer;
  }
  & > div {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

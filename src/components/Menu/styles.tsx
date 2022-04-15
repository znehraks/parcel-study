import styled from "styled-components";

export const CreateMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    width: 10vw;
    height: 5vh;
    background-color: limegreen;
  }
`;

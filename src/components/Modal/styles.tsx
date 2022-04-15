import styled from "styled-components";

export const CreateModal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  //직속 자손만
  & > div {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      width: 50vw;
      height: 25vh;
      opacity: 1;
      background-color: bisque;
    }
  }
`;

import React, { useCallback } from "react";
import { CreateModal } from "./styles";

//토글메뉴와 메뉴 바깥 클릭 시 닫히도록 구현
const Modal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);
  return (
    <CreateModal isOpen={isOpen} onClick={() => setIsOpen(false)}>
      <div>
        <div onClick={stopPropagation}>모달!</div>
      </div>
    </CreateModal>
  );
};

export default Modal;

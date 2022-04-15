import React, { useCallback } from "react";
import { CreateMenu } from "./styles";

//토글메뉴와 메뉴 바깥 클릭 시 닫히도록 구현
const Menu = ({ setIsOpen }: { setIsOpen: (value: boolean) => void }) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);
  return (
    <CreateMenu onClick={() => setIsOpen(false)}>
      <div onClick={stopPropagation}>메뉴</div>
    </CreateMenu>
  );
};

export default Menu;

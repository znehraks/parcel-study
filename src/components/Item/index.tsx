import React from "react";
import { Wrapper } from "./styles";

const Item = ({ value, date }: { value: string; date: string }) => {
  return (
    <Wrapper>
      {value}: {date}
    </Wrapper>
  );
};

export default Item;

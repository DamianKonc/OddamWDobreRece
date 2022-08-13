import React from "react";

import { Props } from "./type";

const ThreeColumnsItem = ({ howMuch, toWhat, paragraph }: Props) => {
  return (
    <div className="homeThreeColumnsItem">
      <h2 className="homeThreeColumnsItem__counter">{howMuch}</h2>
      <p className="homeThreeColumnsItem__header">{toWhat}</p>
      <p className="homeThreeColumnsItem__paragraph">{paragraph}</p>
    </div>
  );
};

export default ThreeColumnsItem;

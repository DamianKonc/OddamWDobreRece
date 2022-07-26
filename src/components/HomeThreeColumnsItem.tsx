import React from "react";

type HomeThreeColumnsItemProps = {
  howMuch: number;
  toWhat: string;
  paragraph: string;
};

const HomeThreeColumnsItem = (props: HomeThreeColumnsItemProps) => {
  return (
    <div className="homeThreeColumnsItem">
      <h2 className="homeThreeColumnsItem__counter">{props.howMuch}</h2>
      <p className="homeThreeColumnsItem__header">{props.toWhat}</p>
      <p className="homeThreeColumnsItem__paragraph">{props.paragraph}</p>
    </div>
  );
};

export default HomeThreeColumnsItem;

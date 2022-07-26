import React from "react";
type input = {
  text: string;
};

const MainButton = (props: input) => {
  return <button className="mainButton">{props.text}</button>;
};

export default MainButton;

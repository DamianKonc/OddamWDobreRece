import React from "react";
import { Props } from "./type";

const Logo = ({ text, text2 }: Props) => {
  return (
    <div className="headerTitle">
      <h1 className="headerTitle__title">
        <p>{text}</p>
        <p>{text2}</p>
      </h1>
      <div className="headerTitle__img" />
    </div>
  );
};

export default Logo;

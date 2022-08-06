import React from "react";

type HeaderText = {
  text: string;
  text2?: string;
};

const Logo = (props: HeaderText) => {
  return (
    <div className="headerTitle">
      <h1 className="headerTitle__title">
        <p>{props.text}</p>
        <p>{props.text2}</p>
      </h1>
      <div className="headerTitle__img" />
    </div>
  );
};

export default Logo;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { Props } from "./type";

const MainButton = ({ text }: Props) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    return (
      <Link to={"/giveform"} className="mainButton">
        {text}
      </Link>
    );
  } else {
    return (
      <Link to={"/login"} className="mainButton">
        {text}
      </Link>
    );
  }
};

export default MainButton;

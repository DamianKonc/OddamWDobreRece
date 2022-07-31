import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

type input = {
  text: string;
};

const MainButton = (props: input) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    return (
      <Link to={"/login"} className="mainButton">
        {props.text}
      </Link>
    );
  } else {
    return (
      <Link to={"/login"} className="mainButton">
        {props.text}
      </Link>
    );
  }
};

export default MainButton;

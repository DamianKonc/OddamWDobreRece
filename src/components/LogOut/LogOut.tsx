import React from "react";
import Logo from "../Logo";
import Navigation from "../Navigation/MainNav";
import { Link } from "react-router-dom";

const LogOut = () => {
  return (
    <div>
      <Navigation />
      <div className="logout__text">
        <div className="logout__header-wrapper">
          <Logo text="Wylogowanie nastąpiło pomyślnie!" />
        </div>
        <Link className="logout__btn" to="/">
          Strona główna
        </Link>
      </div>
    </div>
  );
};

export default LogOut;

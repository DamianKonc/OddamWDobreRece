import React from "react";
import Navigation from "./Navigation";
import HeaderTitle from "./HeaderTitle";
import { Link } from "react-router-dom";

const CreateApp = () => {
  return (
    <div className="login-register">
      <Navigation />
      <div className="login-register__wrapper">
        <HeaderTitle text="Załóż konto" />
        <form className="login-register__form">
          <label className="login-register__form-label">
            <p>Email</p>
            <input className="login-register__form-input" type="email" />
          </label>
          <label className="login-register__form-label">
            <p>Hasło</p>
            <input className="login-register__form-input" type="password" />
          </label>
          <label className="login-register__form-label">
            <p>Powtórz hasło</p>
            <input className="login-register__form-input" type="password" />
          </label>
        </form>
        <div className="login-register__btns">
          <Link className="login-register__btns__createACC" to={"./createacc"}>
            Zaloguj się
          </Link>
          <button className="login-register__btns__Login">Załóż konto</button>
        </div>
      </div>
    </div>
  );
};

export default CreateApp;

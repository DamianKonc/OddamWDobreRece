import React from "react";
import Navigation from "./Navigation";
import HeaderTitle from "./HeaderTitle";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-register">
      <Navigation />
      <div className="login-register__wrapper">
        <HeaderTitle text="Zaloguj się" />
        <form className="login-register__form">
          <label className="login-register__form-label">
            <p>Email</p>
            <input className="login-register__form-input" type="email" />
          </label>
          <label className="login-register__form-label">
            <p>Hasło</p>
            <input className="login-register__form-input" type="password" />
          </label>
        </form>
        <div className="login-register__btns">
          <Link className="login-register__btns__createACC" to={"./createacc"}>
            Załóż konto{" "}
          </Link>
          <button className="login-register__btns__Login">Zaloguj się</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

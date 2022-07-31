import React, { useState } from "react";
import Navigation from "./Navigation";
import HeaderTitle from "./HeaderTitle";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateApp = () => {
  const auth = getAuth();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const createLogin = (e) => {
    setLogin(e.currentTarget.value);
  };

  const createPassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  const createRepeatPassword = (e) => {
    setRepeatPassword(e.currentTarget.value);
  };

  const createUser = () => {
    if (password !== repeatPassword) {
      setError("Hasła muszą być takie same.");
      setMessage("");
      return;
    }
    createUserWithEmailAndPassword(auth, login, password)
      .then((userCredential) => {
        setError("");
        setMessage("Udało Ci się utworzyć konto");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode + ":" + errorMessage);
      });
  };

  return (
    <div className="login-register">
      <Navigation />
      <div className="login-register__wrapper">
        <HeaderTitle text="Załóż konto" />
        {error ? <div className="errorMessage">{error}</div> : null}
        {message ? <div className="message">{message}</div> : null}
        <form className="login-register__form">
          <label className="login-register__form-label">
            <p>Email</p>
            <input
              onChange={createLogin}
              value={login}
              className="login-register__form-input"
              type="email"
            />
          </label>
          <label className="login-register__form-label">
            <p>Hasło</p>
            <input
              onChange={createPassword}
              value={password}
              className="login-register__form-input"
              type="password"
            />
          </label>
          <label className="login-register__form-label">
            <p>Powtórz hasło</p>
            <input
              onChange={createRepeatPassword}
              value={repeatPassword}
              className="login-register__form-input"
              type="password"
            />
          </label>
        </form>
        <div className="login-register__btns">
          <Link className="login-register__btns__createACC" to={"./createacc"}>
            Zaloguj się
          </Link>
          <button onClick={createUser} className="login-register__btns__Login">
            Załóż konto
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateApp;

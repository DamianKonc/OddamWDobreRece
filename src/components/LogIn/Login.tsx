import React, { useState } from "react";
import Navigation from "../Navigation/MainNav";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { TextInput } from "./type";

//usenavigate

const Login = () => {
  const auth = getAuth();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const loginIn = (e: TextInput) => {
    setLogin(e.currentTarget.value);
  };

  const loginPassword = (e: TextInput) => {
    setPassword(e.currentTarget.value);
  };

  const logInUser = () => {
    signInWithEmailAndPassword(auth, login, password)
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
        <Logo text="Zaloguj się" />

        {error ? <div className="errorMessage">{error}</div> : null}
        {message ? <div className="message">{message}</div> : null}
        <form className="login-register__form">
          <label className="login-register__form-label">
            <p>Email</p>
            <input
              onChange={loginIn}
              value={login}
              className="login-register__form-input"
              type="email"
            />
          </label>
          <label className="login-register__form-label">
            <p>Hasło</p>
            <input
              onChange={loginPassword}
              value={password}
              className="login-register__form-input"
              type="password"
            />
          </label>
        </form>
        <div className="login-register__btns">
          <Link className="login-register__btns__createACC" to={"/createacc"}>
            Załóż konto{" "}
          </Link>
          <button onClick={logInUser} className="login-register__btns__Login">
            Zaloguj się
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

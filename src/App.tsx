import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import CreateAcc from "./components/CreateAcc";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createacc" element={<CreateAcc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import "./scss/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/LogIn";
import CreateAcc from "./components/CreateAcc";
import LogOut from "./components/LogOut";
import GiveBackForm from "./components/GiveBackForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createacc" element={<CreateAcc />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/giveform" element={<GiveBackForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login_Cadastro/Login";
import Cadastro from "./components/Login_Cadastro/Cadastro";
import Home from "./components/Home/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/cadastro" Component={Cadastro}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Cadastro from "./components/Cadastro/Cadastro";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/cadastro" Component={Cadastro}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

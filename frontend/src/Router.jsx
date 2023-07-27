import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./routes/Login_Cadastro/Login";
import Cadastro from "./routes/Login_Cadastro/Cadastro";
import Home from "./routes/Home/Home";

function Router() {
  const isAuthenticated = sessionStorage.getItem("usuario");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        {isAuthenticated ? (
          <Route path="/home" element={<Home />}></Route>
        ) : (
          <Route path="/home" element={<Navigate to="/" />}></Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}
export default Router;

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login_Cadastro/Login";
import Cadastro from "./pages/Login_Cadastro/Cadastro";
import Home from "./pages/Home/Home";
import Contas from "./pages/Contas/Contas";
import Investimentos from "./pages/Investimentos/Investimentos";
import Emprestimos from "./pages/Emprestimos/Emprestimos";
import Transferencias from "./pages/Transferencias/Transferencias";

function Router() {
  const isAuthenticated = sessionStorage.getItem("usuario");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        {isAuthenticated ? (
          <>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/contas" element={<Contas />}></Route>
            <Route path="/investimentos" element={<Investimentos />}></Route>
            <Route path="/emprestimos" element={<Emprestimos />}></Route>
            <Route path="/transfer" element={<Transferencias />}></Route>
          </>
        ) : (
          <>
            <Route path="/home" element={<Navigate to="/" />}></Route>
            <Route path="/contas" element={<Navigate to="/" />}></Route>
            <Route path="/investimentos" element={<Navigate to="/" />}></Route>
            <Route path="/emprestimos" element={<Navigate to="/" />}></Route>
            <Route path="/transfer" element={<Navigate to="/" />}></Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
export default Router;

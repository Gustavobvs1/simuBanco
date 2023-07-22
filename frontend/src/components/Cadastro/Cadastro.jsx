import React from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Cadastro.css";

function Cadastro() {
  return (
    <main className="cadastro">
      <div className="cadastro-container">
        <img src={Logo} alt="Logo" className="cadastro-logo" />
        <form action="" className="cadastro-form">
          <input
            type="text"
            name="nome"
            className="cadastro-input"
            placeholder="Seu Nome"
            required
          />
          <input
            type="text"
            name="sobrenome"
            className="cadastro-input"
            placeholder="Seu Sobrenome"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu Email"
            className="cadastro-input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            className="cadastro-input"
            required
          />
          <button type="submit" className="cadastro-btn">
            CADASTRAR
          </button>
        </form>
        <p>
          Já possui cadastro?
          <br />
          <Link to="/login">Faça login aqui</Link>
        </p>
      </div>
    </main>
  );
}

export default Cadastro;

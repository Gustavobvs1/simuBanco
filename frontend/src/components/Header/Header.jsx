import React from "react";
import "./Header.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="cabecalho">
      <Link to={"/"}>
        <img src={Logo} alt="Logo" className="cabecalho-imagem" />
      </Link>
      <nav className="navbar">
        <ul>
          <li>
            <Link to={"/"} className="navbar-item">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/contas"} className="navbar-item">
              Contas
            </Link>
          </li>
          <li>
            <Link to={"/cartoes"} className="navbar-item">
              Cartões
            </Link>
          </li>
          <li>
            <Link to={"/investimentos"} className="navbar-item">
              Investimentos
            </Link>
          </li>
          <li>
            <Link to={"/transfer"} className="navbar-item">
              Transferencias
            </Link>
          </li>
          <li>
            <Link to={"/historico"} className="navbar-item">
              Histórico
            </Link>
          </li>
        </ul>
      </nav>
      <div className="cabecalho-users">
        <p className="users-nome">Nome</p>
        <button className="btn-sair">Sair</button>
      </div>
    </header>
  );
}

export default Header;

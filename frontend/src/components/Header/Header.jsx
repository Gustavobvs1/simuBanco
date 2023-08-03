import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

function Header() {
  const [nome, setNome] = useState("");
  useEffect(() => {
    const usuario = sessionStorage.getItem("usuario");
    async function fetchUser() {
      const response = await axios.post("http://localhost:3002/session", {
        email: usuario,
      });
      return response;
    }
    fetchUser().then((response) => {
      setNome(response.data.nome);
    });
  }, []);

  function handleLogout(event) {
    event.preventDefault();
    sessionStorage.removeItem("usuario");
    window.location.replace("/");
  }
  return (
    <header className="cabecalho">
      <Link to={"/home"}>
        <img src={Logo} alt="Logo" className="cabecalho-imagem" />
      </Link>
      <nav className="navbar">
        <ul>
          <li>
            <Link to={"/home"} className="navbar-item">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/contas"} className="navbar-item">
              Contas
            </Link>
          </li>
          <li>
            <Link to={"/investimentos"} className="navbar-item">
              Investimentos
            </Link>
          </li>
          <li>
            <Link to={"/emprestimos"} className="navbar-item">
              Emprestimos
            </Link>
          </li>
          <li>
            <Link to={"/transfer"} className="navbar-item">
              Transferencias
            </Link>
          </li>
        </ul>
      </nav>
      <div className="cabecalho-users">
        <p className="users-nome">{nome}</p>
        <button className="btn-sair" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </header>
  );
}

export default Header;

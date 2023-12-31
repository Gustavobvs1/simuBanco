import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import fetchUser from "../../utils/fetchUser.js";
import axios from "axios";

function Header() {
  const [nome, setNome] = useState("");
  useEffect(() => {
    fetchUser().then((response) => {
      console.log(response);
      setNome(response.data.nome);
    });
  }, []);

  // useEffect(() =>
  //   axios.get("http://localhost:3002/cookie").then((res) => console.log(res))
  // );

  async function handleLogout(event) {
    event.preventDefault();
    await axios.get("http://localhost:3002/deletecookie");
    window.location.replace("/login");
  }
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

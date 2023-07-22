import React from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <main className="login">
      <div className="login-container">
        <img src={Logo} alt="Logo" className="login-logo" />
        <form action="" className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Seu Email"
            className="login-input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            className="login-input"
            required
          />
          <button type="submit" className="login-btn">
            LOGIN
          </button>
        </form>
        <p>
          Ainda sem cadastro?
          <br />
          <Link to="/cadastro">Cadastra-se aqui</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;

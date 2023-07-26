import React from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Login_Cadastro.css";

function Login() {
  return (
    <main className="form">
      <div className="form-container">
        <img src={Logo} alt="Logo" className="form-logo" />
        <form action="" className="form-form">
          <input
            type="email"
            name="email"
            placeholder="Seu Email"
            className="form-input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            className="form-input"
            required
          />
          <button type="submit" className="form-btn">
            LOGIN
          </button>
        </form>
        <p>
          Ainda sem cadastro?
          <br />
          <Link to="/cadastro">Cadastre-se aqui</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;

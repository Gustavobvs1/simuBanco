import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Login_Cadastro.css";
import { AiFillCheckSquare, AiFillCloseSquare } from "react-icons/ai";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/login", {
        email,
        senha,
      });
      if (response.status === 200) {
        sessionStorage.setItem("usuario", response.data.email);
        setLoginSuccess(true);
        setLoginError(false);
        setTimeout(() => window.location.replace("/home"), 1000);
      }
    } catch (err) {
      console.log(err);
      setLoginError(true);
    }
  }
  return (
    <main className="form">
      <div className="form-container">
        <img src={Logo} alt="Logo" className="form-logo" />
        <form onSubmit={handleSubmit} className="form-form">
          <input
            type="email"
            name="email"
            placeholder="Seu Email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            className="form-input"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit" className="form-btn">
            LOGIN
          </button>
        </form>

        {loginSuccess && (
          <div className="mensagem-container">
            <p className="sucesso-mensagem">Login bem-sucedido!</p>
            <AiFillCheckSquare className="sucesso-imagem" />
          </div>
        )}
        {loginError && (
          <div className="mensagem-container">
            <p className="erro-mensagem">Ocorreu algum erro!</p>
            <AiFillCloseSquare className="erro-imagem" />
          </div>
        )}
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

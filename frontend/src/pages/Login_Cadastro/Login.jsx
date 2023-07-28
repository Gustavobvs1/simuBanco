import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Login_Cadastro.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/login", {
        email,
        senha,
      });
      if (response.status === 200) {
        sessionStorage.setItem("usuario", response.data.nome);
        window.location.replace("/home");
      }
    } catch (err) {
      setMessage(err.message);
      console.log(message);
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

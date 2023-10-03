import React, { useEffect, useState } from "react";
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

  async function testFunction(event) {
    event.preventDefault();
    await axios
      .get("http://localhost:3002/getcookie")
      .then((res) => console.log(res));
  }

  async function deleteCookie(event) {
    event.preventDefault();
    await axios.get("http://localhost:3002/deletecookie");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await axios
      .post("http://localhost:3002/login", {
        email,
        senha,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          if (response.data.loggedIn === true) {
            setLoginSuccess(true);
            setLoginError(false);
            // setTimeout(() => window.location.replace("/"), 1000);
          } else {
            setLoginError(true);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setLoginError(true);
      });
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
        <button onClick={testFunction}>getCookie</button>
        <button onClick={deleteCookie}>deleteCookie</button>
      </div>
    </main>
  );
}

export default Login;

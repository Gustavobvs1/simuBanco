import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Login_Cadastro.css";
import axios from "axios";

function Cadastro() {
  const [data, setData] = useState({
    nome: "",
    cpf: "",
    email: "",
    senha: "",
  });

  function valueInput(element) {
    setData({ ...data, [element.target.name]: element.target.value });
  }
  async function addUser(event) {
    const url = "http://localhost:3002/cadastro/";
    event.preventDefault();

    await axios
      .post(url, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setData({
      nome: "",
      cpf: "",
      email: "",
      senha: "",
    });
  }

  return (
    <main className="form">
      <div className="form-container">
        <img src={Logo} alt="Logo" className="form-logo" />
        <form onSubmit={addUser} className="form-form">
          <input
            type="text"
            name="nome"
            className="form-input"
            placeholder="Seu Nome"
            onChange={valueInput}
            value={data.nome}
            required
          />
          <input
            type="text"
            name="cpf"
            className="form-input"
            placeholder="Seu CPF"
            onChange={valueInput}
            value={data.cpf}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu Email"
            className="form-input"
            onChange={valueInput}
            value={data.email}
            required
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            className="form-input"
            onChange={valueInput}
            value={data.senha}
            required
          />
          <button type="submit" className="form-btn">
            CADASTRAR
          </button>
        </form>
        <p>
          Já possui cadastro?
          <br />
          <Link to="/">Faça login aqui</Link>
        </p>
      </div>
    </main>
  );
}

export default Cadastro;

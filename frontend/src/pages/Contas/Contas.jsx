import React from "react";
import Header from "../../components/Header/Header";
import "./Contas.css";
import AccountCard from "../../components/AccountCard/AccountCard";

function Contas() {
  return (
    <>
      <Header />
      <main className="contas">
        <div className="contas-container">
          <p>Selecione o tipo da conta: </p>
          <select name="conta" className="contas-select">
            <option value="" autoFocus>
              Selecione
            </option>
            <option value="corrente">Conta Corrente</option>
            <option value="poupanca">Conta Poupança</option>
          </select>
        </div>
        <AccountCard className="contas-card" />
      </main>
    </>
  );
}

export default Contas;

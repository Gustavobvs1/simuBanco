import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Contas.css";
import AccountCard from "../../components/AccountCard/AccountCard";
import AccountModal from "../../components/AccountModal/AccountModal";

function Contas() {
  const [modalOpen, setModalOpen] = useState(false);

  function closeModal() {
    setModalOpen(false);
  }

  function openModal() {
    setModalOpen(true);
  }

  return (
    <>
      <Header />
      <main className="contas">
        <button className="contas-create" onClick={openModal}>
          Criar Conta
        </button>
        <AccountModal isOpen={modalOpen} onRequestClose={closeModal} />
        <div className="contas-container">
          <p>Selecione o tipo da conta: </p>
          <select name="conta" className="contas-select">
            <option value="" autoFocus>
              Não informado
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

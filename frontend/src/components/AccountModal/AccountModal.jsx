import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./AccountModal.css";
import axios from "axios";
import fetchUser from "../../utils/fetchUser.js";

function AccountModal({ isOpen, onRequestClose, onCreate }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [userId, setUserId] = useState();
  const [banco, setBanco] = useState("");

  useEffect(() => {
    fetchUser().then((response) => {
      setUserId(response.data.id);
    });
  }, []);

  function valueInput(element) {
    setBanco(element.target.value);
  }

  function selectOption(element) {
    setSelectedOption(element.target.value);
  }
  const data = {
    usuario_id: userId,
    tipo_conta: selectedOption,
    banco: banco,
  };
  async function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:3002/accounts/";
    await axios.post(url, data);
    setBanco("");
    onRequestClose();
    onCreate();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="conta-overlay"
      className="conta-modal"
    >
      <h2>Insira os dados da conta</h2>
      <form onSubmit={handleSubmit} className="conta-modal-form">
        <input
          type="text"
          name="banco"
          className="form-input"
          placeholder="Digite o seu banco"
          onChange={valueInput}
          value={banco}
          required
        />
        <div className="conta-select-container">
          <label htmlFor="conta-select">Tipo de conta:</label>
          <select
            className="conta-select"
            name="tipo_conta"
            onChange={selectOption}
            required
          >
            <option value="" autoFocus>
              Selecione:
            </option>
            <option value="corrente">Conta corrente</option>
            <option value="poupanca">Conta poupança</option>
          </select>
        </div>
        <button type="submit" className="form-btn conta-modal-btn">
          Enviar
        </button>
      </form>
    </Modal>
  );
}

export default AccountModal;

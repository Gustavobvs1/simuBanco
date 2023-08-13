import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Contas.css";
import AccountCard from "../../components/AccountCard/AccountCard";
import AccountModal from "../../components/AccountModal/AccountModal";
import fetchUser from "../../utils/fetchUser.js";
import axios from "axios";

function Contas() {
  const [modalOpen, setModalOpen] = useState(false);
  const [accountData, setAccountData] = useState([]);
  const [selectedOption, setSelectedOption] = useState();
  const [user, setUser] = useState();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchUser().then((res) => {
      setUser(res.data);
    });
  }, []);

  function closeModal() {
    setModalOpen(false);
  }

  function openModal() {
    setModalOpen(true);
  }

  async function selectOption(element) {
    setSelectedOption(element.target.value);
    await axios
      .get(`http://localhost:3002/account/${user.id}`)
      .then((response) => {
        setAccountData(response.data);
      });
    setFilteredData(
      accountData.filter((element) => element.tipo_conta === selectedOption)
    );
  }

  console.log(filteredData);
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
          <select
            name="conta"
            className="contas-select"
            onChange={selectOption}
          >
            <option value="" autoFocus>
              Não informado
            </option>
            <option value="corrente">Conta Corrente</option>
            <option value="poupanca">Conta Poupança</option>
          </select>
        </div>
        <div className="contas-data-container">
          {filteredData.map((data, index) => (
            <AccountCard className="contas-card" key={index} data={data} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Contas;

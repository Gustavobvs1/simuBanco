import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Contas.css";
import AccountCard from "../../components/AccountCard/AccountCard";
import AccountModal from "../../components/AccountModal/AccountModal";
import fetchUser from "../../utils/fetchUser.js";
import fetchAccount from "../../utils/fetchAccount";

function Contas() {
  const [modalOpen, setModalOpen] = useState(false);
  const [accountData, setAccountData] = useState([]);
  const [user, setUser] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    fetchUser().then((res) => {
      setUser(res.data);
    });
  }, []);

  useEffect(() => {
    if (user !== undefined) {
      fetchAccount(user.id).then((response) => {
        setAccountData(response);
      });
    }
  }, [user]);

  function closeModal() {
    setModalOpen(false);
  }

  function openModal() {
    setModalOpen(true);
  }

  async function selectOption(element) {
    const option = element.target.value;
    setSelectedOption(option);
    setFilteredData(
      accountData.filter((element) => element.tipo_conta === option)
    );
  }

  async function handleCreateCard() {
    await fetchAccount(user.id).then((response) => {
      setAccountData(response);
      setFilteredData(
        accountData.filter((element) => element.tipo_conta === selectedOption)
      );
    });
  }

  function handleDelete(id) {
    const updatedData = accountData.filter((card) => card.id !== id);
    setFilteredData(
      updatedData.filter((card) => card.tipo_conta === selectedOption)
    );
    setAccountData(updatedData);
  }

  return (
    <>
      <Header />
      <main className="contas">
        <button className="contas-create" onClick={openModal}>
          Criar Conta
        </button>
        <AccountModal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          onCreate={handleCreateCard}
        />
        <div className="contas-container">
          <p>Selecione o tipo da conta: </p>
          <select
            name="conta"
            className="contas-select"
            onChange={selectOption}
          >
            <option value="">Não informado</option>
            <option value="corrente">Conta Corrente</option>
            <option value="poupanca">Conta Poupança</option>
          </select>
        </div>
        <div className="contas-data-container">
          {filteredData.map((data, index) => (
            <AccountCard
              className="contas-card"
              key={index}
              data={data}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Contas;

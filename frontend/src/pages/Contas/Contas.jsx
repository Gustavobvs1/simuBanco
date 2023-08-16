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
  const [accountExists, setAccountExists] = useState(false);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function getData() {
      await fetchUser().then((res) => {
        setUser(res.data);
      });
    }
    getData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (user !== undefined) {
        await fetchAccount(user.id).then(async (response) => {
          await setAccounts(response);
        });
      }
    }
    fetchData();
  }, [accountData, user, filteredData]);

  useEffect(() => {
    if (accounts.length > 0) {
      setAccountExists(true);
    }
  }, [accounts]);

  function closeModal() {
    setModalOpen(false);
  }

  function openModal() {
    setModalOpen(true);
  }

  async function selectOption(element) {
    const data = accounts;
    const option = element.target.value;
    setSelectedOption(option);
    setFilteredData(data.filter((element) => element.tipo_conta === option));
    setAccountData(accounts);
  }

  async function handleCreateCard() {
    if (user !== undefined) {
      await fetchAccount(user.id).then((response) => {
        const data = response;
        setFilteredData(
          data.filter((element) => element.tipo_conta === selectedOption)
        );
        setAccountData(data);
      });
    }
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
        <>
          {accountExists && (
            <>
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
            </>
          )}
        </>
      </main>
    </>
  );
}

export default Contas;

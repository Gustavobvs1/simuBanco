import React, { useEffect } from "react";
import { useState } from "react";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiFillDelete,
} from "react-icons/ai";
import "./AccountCard.css";
import formatCurrency from "../../utils/formatCurrency";
import formatCard from "../../utils/formatCard";
import calculateInterest from "../../utils/calculateInterest";
import axios from "axios";

function AccountCard({ data, onDelete }) {
  const { saldo, banco, id, tipo_conta } = data;
  const [expanded, setExpanded] = useState(false);
  const [cardCreated, setCardCreated] = useState(false);
  const [cardData, setCardData] = useState({});
  const { numero_cartao, data_validade, limite_credito } = cardData;

  useEffect(() => {
    if (cardCreated === true) {
      async function fetchCard() {
        if (tipo_conta === "corrente") {
          await axios
            .get(`http://localhost:3002/card/${id}`)
            .then((res) => setCardData(res.data));
        }
      }
      fetchCard();
    }
  }, [id, tipo_conta, cardCreated]);

  function toggleExpansion() {
    setExpanded(!expanded);
    if (typeof cardData !== "string") {
      setCardCreated(true);
    }
  }

  async function handleCreateCard() {
    const data = {
      conta_id: id,
    };
    await axios.post("http://localhost:3002/cards", data);
    if (typeof cardData !== "string") {
      setCardCreated(true);
    }
  }
  console.log(cardCreated);

  async function deleteAccount() {
    await axios.delete(`http://localhost:3002/cards/${id}`);
    await axios.delete(`http://localhost:3002/accounts/${id}`);
    onDelete(id);
  }

  return (
    <div className={`card ${expanded ? "expanded" : ""}`}>
      <div className="card-header">
        <h3 className="card-banco">{banco}</h3>
        <h3 className="card-saldo">{formatCurrency(parseInt(saldo), "BRL")}</h3>
        <div className="card-buttons">
          <button className="delete-button" onClick={deleteAccount}>
            <AiFillDelete className="delete-card" />
          </button>
          <button className="expand-button" onClick={toggleExpansion}>
            {expanded ? (
              <AiFillMinusCircle className="expand-card" />
            ) : (
              <AiFillPlusCircle className="expand-card" />
            )}
          </button>
        </div>
      </div>
      {expanded && (
        <div className="card-details">
          {tipo_conta === "corrente" && (
            <>
              {!cardCreated && (
                <button className="card-create" onClick={handleCreateCard}>
                  Criar Cartão
                </button>
              )}
              {cardCreated && (
                <span className="card-text">
                  <p>Cartão</p>
                  <p>{formatCard(numero_cartao)}</p>
                  <div className="card-informations">
                    <p>{data_validade}</p>
                    <p>
                      Limite: {formatCurrency(parseInt(limite_credito), "BRL")}
                    </p>
                  </div>
                </span>
              )}
            </>
          )}
          {tipo_conta === "poupanca" && (
            <span>
              <p className="conta-rendimento-texto">
                Rendimento:{" "}
                {formatCurrency(calculateInterest(parseInt(saldo)), "BRL")}
              </p>
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default AccountCard;

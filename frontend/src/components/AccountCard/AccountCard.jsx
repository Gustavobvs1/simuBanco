import React from "react";
import { useState } from "react";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiFillDelete,
} from "react-icons/ai";
import "./AccountCard.css";

function AccountCard() {
  const [expanded, setExpanded] = useState(false);
  const [cardCreated, setCardCreated] = useState(true);

  function toggleExpansion() {
    setExpanded(!expanded);
  }

  return (
    <div className={`card ${expanded ? "expanded" : ""}`}>
      <div className="card-header">
        <h3 className="card-banco">Banco</h3>
        <h3 className="card-saldo">Saldo</h3>
        <div className="card-buttons">
          <button className="delete-button">
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
          {cardCreated && <button className="card-create">Criar Cartão</button>}
          {!cardCreated && (
            <span className="card-text">
              <p>Cartão</p>
              <p>0003-0000-0000-0000</p>
              <div className="card-informations">
                <p>20/21</p>
                <p>Limite: 2000</p>
              </div>
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default AccountCard;

import React from "react";
import { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import "./AccountCard.css";

function AccountCard() {
  const [expanded, setExpanded] = useState(false);

  function toggleExpansion() {
    setExpanded(!expanded);
  }

  return (
    <div className={`card ${expanded ? "expanded" : ""}`}>
      <div className="card-header">
        <h3 className="card-banco">Banco</h3>
        <h3 className="card-saldo">Saldo</h3>
        <button className="expand-button" onClick={toggleExpansion}>
          {expanded ? (
            <AiFillMinusCircle className="icone-card" />
          ) : (
            <AiFillPlusCircle className="icone-card" />
          )}
        </button>
      </div>
      {expanded && (
        <div className="card-details">
          <button className="">Criar Cartão</button>
        </div>
      )}
    </div>
  );
}

export default AccountCard;

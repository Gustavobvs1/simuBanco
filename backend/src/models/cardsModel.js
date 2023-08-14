const connection = require("./connection");
const {
  generateRandomCardNumber,
  generateRandomCreditLimit,
  generateRandomExpirationDate,
} = require("../utils/generateFunctions");

async function getCards() {
  const getQuery = "SELECT * FROM cartoes_credito";
  const [cards] = await connection.execute(getQuery);
  return cards;
}

async function getCard(conta_id) {
  const getAccountQuery = "SELECT * FROM cartoes_credito WHERE conta_id = ?";
  const [data] = await connection.execute(getAccountQuery, [conta_id]);
  return data;
}

async function addCard(account) {
  const { conta_id } = account;
  const insertQuery =
    "INSERT INTO cartoes_credito(conta_id, numero_cartao, data_validade,limite_credito) VALUES(?, ?, ?, ?)";
  const [createdCard] = await connection.execute(insertQuery, [
    conta_id,
    generateRandomCardNumber(),
    generateRandomExpirationDate(),
    generateRandomCreditLimit(),
  ]);
  return { insertId: createdCard.insertId };
}

async function deleteCard(id) {
  const deleteQuery = "DELETE FROM cartoes_credito WHERE conta_id = ?";
  const [deletedCard] = await connection.execute(deleteQuery, [id]);
  return deletedCard;
}

module.exports = {
  getCards,
  getCard,
  addCard,
  deleteCard,
};

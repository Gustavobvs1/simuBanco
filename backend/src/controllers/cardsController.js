const cardsModel = require("../models/cardsModel");

async function getCards(req, res) {
  const cards = await cardsModel.getCards();
  res.status(200).json(cards);
}

async function getCard(req, res) {
  const [card] = await cardsModel.getCard(req.params.conta_id);
  res.status(200).json(card);
}

async function addCard(req, res) {
  const createdAccount = await cardsModel.addCard(req.body);
  res.status(200).json(createdAccount);
}

async function deleteCard(req, res) {
  const { id } = req.params;
  await cardsModel.deleteCard(id);
  res.status(204).json();
}

module.exports = {
  getCards,
  getCard,
  addCard,
  deleteCard,
};

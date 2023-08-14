function generateRandomForCardNumber(length) {
  return Math.floor(Math.random() * Math.pow(10, length));
}

function generateRandomCardNumber() {
  const possibleIINs = ["3", "4", "5", "6"]; // Os mais comuns
  const randomIIN =
    possibleIINs[Math.floor(Math.random() * possibleIINs.length)];

  const accountNumber = generateRandomForCardNumber(14); // Alterado para 13 dígitos
  const checkDigit = generateRandomForCardNumber(1);

  return `${randomIIN}${accountNumber}${checkDigit}`;
}

function generateRandomForDate(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomExpirationDate() {
  const currentYear = new Date().getFullYear();
  const minYear = currentYear;
  const maxYear = currentYear + 5; // Válido para os próximos 5 anos

  const randomMonth = generateRandomForDate(1, 12);
  const randomYear = generateRandomForDate(minYear, maxYear);

  // Formatação dos dígitos com 2 caracteres
  const formattedMonth = String(randomMonth).padStart(2, "0");
  const formattedYear = String(randomYear).slice(-2); // Pega os últimos 2 dígitos

  return `${formattedMonth}/${formattedYear}`;
}

function generateRandomCreditLimit() {
  const minLimit = 1000; // Limite mínimo fictício
  const maxLimit = 20000; // Limite máximo fictício

  return generateRandomForDate(minLimit, maxLimit);
}

module.exports = {
  generateRandomCardNumber,
  generateRandomCreditLimit,
  generateRandomExpirationDate,
};

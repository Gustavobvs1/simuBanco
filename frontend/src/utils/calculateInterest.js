const taxaRendimento = 0.03;

function calculateInterest(valor) {
  const rendimento = valor * taxaRendimento;
  return rendimento;
}

export default calculateInterest;

function formatCard(data) {
  let word = "";
  for (let i in data) {
    if (i !== -1 && i % 4 === 0) {
      word += "-";
    }
    word += data[i];
  }
  return word;
}

export default formatCard;

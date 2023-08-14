import axios from "axios";

async function fetchAccount(user) {
  const url = `http://localhost:3002/account/${user}`;
  const response = await axios.get(url);
  return response.data;
}

export default fetchAccount;

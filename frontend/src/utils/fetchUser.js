import axios from "axios";

async function fetchUser() {
  const userId = await axios.get("http://localhost:3002/getcookie");
  console.log(userId.data);
  const response = await axios.post("http://localhost:3002/session", {
    id: userId.data,
  });
  return response;
}

export default fetchUser;

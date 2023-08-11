import axios from "axios";

async function fetchUser() {
  const usuario = sessionStorage.getItem("usuario");
  const response = await axios.post("http://localhost:3002/session", {
    email: usuario,
  });
  return response;
}

export { fetchUser };

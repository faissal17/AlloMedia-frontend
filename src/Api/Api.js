import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth/",
  timeout: 5000,
});
// send token
export const SetToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("jwtToken", token);
  } else {
    delete api.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwtToken");
  }
};

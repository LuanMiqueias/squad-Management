import axios from "axios";

const api = axios.create({
  baseURL: "https://v3.football.api-sports.io",
});
export default api;

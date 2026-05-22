import axios from "axios";

const API = axios.create({
  baseURL: "https://taskflow-backend-zv5b.onrender.com/api",
});

export default API;
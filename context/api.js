import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.72:8000/api", // Cambia esto por tu URL de API
  withCredentials: true,
});

export default api;

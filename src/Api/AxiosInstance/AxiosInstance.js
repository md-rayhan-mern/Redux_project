import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    "X-Custom-Header": "Browser",
    "Accept": "application/json",
  },
});

export default api
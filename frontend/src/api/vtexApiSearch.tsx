import axios from "axios";

const api = axios.create({
  baseURL:
    "https://www.livreeleve.com.br/api/catalog_system/pub/products/search",
  headers: {
    "Content-Type": "application/json", //
  },
});

export default api;

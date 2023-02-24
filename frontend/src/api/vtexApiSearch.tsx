import config from "@/config/server";
import axios from "axios";

const api = axios.create({
  baseURL: config.SERVER_URL,
  headers: {
    "Content-Type": "application/json", //
  },
});

export default api;

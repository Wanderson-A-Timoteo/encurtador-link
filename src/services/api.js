// Minha chave:  5969093bed7fab5e6582850b47adb27b98565c6b
import axios from "axios";

export const key = "5969093bed7fab5e6582850b47adb27b98565c6b";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;

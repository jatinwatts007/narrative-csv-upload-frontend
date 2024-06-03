import axios from "axios";

export const instance = axios.create({
  baseURL: "http://127.0.0.1:8000", // best approach is to store base url in the constant file or in the .env file
});

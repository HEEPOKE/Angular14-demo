import axios from "axios";
import config from "../config/config";

const http = axios.create({
  baseURL: config.ENDPOINT_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export default http;

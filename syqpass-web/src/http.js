import axios from "axios";
import config from "./config.json";

export default axios.create({
  baseURL: config.api.url,
  headers: config.api.header,
});

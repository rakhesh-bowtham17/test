import axios from "axios";
import { BASE_URL } from "../constants/url-constants";

/**
 * axios instance with base url and request header which will be added to all the
 * requests made with this instance
 */
const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "token",
    "Content-type": "application/json",
  },
});

export { apiInstance };

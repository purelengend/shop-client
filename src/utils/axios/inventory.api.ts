import axios from "axios";
import {logLoading} from "../../../log_color.dev";
import { HOST_URL } from "./host";

const InventoryClient = axios.create({
  baseURL: HOST_URL.length > 0 ? HOST_URL : "http://localhost:3002/inventory/",
});

InventoryClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      logLoading("axios is requesing with existed token");
    } else {
      logLoading("axios is requesing without token");
    }
    return config;
  },
  error => Promise.reject(error),
);

export {InventoryClient};

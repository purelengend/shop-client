import axios from "axios";
import { logLoading } from "../../../log_color.dev";
import { HOST_URL } from "./host";

const ReviewClient = axios.create({
  baseURL: HOST_URL.length > 0 ? `${HOST_URL}/review/` : "http://localhost:3001/review/",
});

ReviewClient.interceptors.request.use(
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

export { ReviewClient };

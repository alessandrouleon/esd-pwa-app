import axios from "axios";
import { LocalStorageToken } from "./Storage/token";
import { AxiosRequestHeaders } from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_PORT_PROJECT_BACKEND}`,
});

api.interceptors.request.use(
  (config) => {
    const token = LocalStorageToken.getLocalStorageToken();
    if (token) {
      if (config.headers) {
        (config.headers as AxiosRequestHeaders)[
          "Authorization"
        ] = `Bearer ${token}`;
      } else {
        config.headers = {
          Authorization: `Bearer ${token}`,
        } as AxiosRequestHeaders;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      // signOut();
    }
    return Promise.reject(error);
  }
);

export default api;

import { BASE_URL, TIME_OUT } from "./config";
import MYRequest from "./request";

const request = new MYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: {
    "Content-Type": "application/json",
  },
  interceptors: {
    requestSuccessFn: (config) => {
      return config;
    },
  },
});

export default request;

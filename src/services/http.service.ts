import axios from "axios";
import qs from "query-string";

export const http = axios.create({
  baseURL: process.env.VITE_API_URL,
  timeout: 30000,
  paramsSerializer: function (params) {
    return qs.stringify(params, {
      encode: false,
    });
  },
});

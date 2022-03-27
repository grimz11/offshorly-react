import axios from "axios";
import qs from "query-string";

export const http = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 30000,
  paramsSerializer: function (params) {
    return qs.stringify(params, {
      encode: false,
    });
  },
});

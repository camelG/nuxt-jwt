import Cookies from "js-cookie";
import axios from "axios";

const service = axios.create({
  baseURL: process.env.API_URL
});

service.interceptors.request.use(
  config => {
    $nuxt.$loading.start();
    const token = Cookies.get("auth._token.local");
    if (token && token != "undefined" && token != "false") {
      config.headers["Authorizationx"] = token;
    }
    return config;
  },
  error => {
    console.log(error);
  }
);

service.interceptors.response.use(
  response => {
    setTimeout(() => $nuxt.$loading.finish(), 300);
    if (process.env.APP_DEBUG) console.log(response);
    return response.data;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;

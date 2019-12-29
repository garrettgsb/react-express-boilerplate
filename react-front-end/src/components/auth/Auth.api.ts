import Axios, { AxiosRequestConfig } from "axios";
// const bcrypt = require('bcrypt');

export interface Credentials {
  email: string;
  password: string;
}

export const onLogin = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: "/login",
    data
  }
  try {
    const { data: response } = await Axios.request(requestConfig);
    return response.data;
  } catch (err) {
    return { error: err.response.data.message }
  }
}
import Axios, { AxiosRequestConfig } from "axios";
// const bcrypt = require('bcrypt');

export interface Credentials {
  username: string;
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
    console.log(response);
  } catch (err) {
    console.error(err);
    return { error: err.response.data.message }
  }
}
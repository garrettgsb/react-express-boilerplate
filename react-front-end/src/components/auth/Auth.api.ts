import Axios from "axios";

export interface Credentials {
  email: string;
  password: string;
}

export const localAuthenticate = (data: Credentials) => {
  Axios({
    method: "post",
    url: "/login",
    data: JSON.stringify(data)
  }).then(res => {
    if (res.data.error) {
      console.log('have error', res.data.error);
      return res.data.error
    } else {
      // localStorage.setItem('user', res.data.user);
      console.log('have user', res.data.user);
      return res.data.user
    }
  }).catch(error => {
    console.log('Error', error)
  })
}

// export const onLogin = async (data: Credentials) => {
//   const requestConfig: AxiosRequestConfig = {
//     method: "post",
//     url: "/login",
//     data
//   }
//   try {
//     const { data: response } = await Axios.request(requestConfig);
//     return response.data;
//   } catch (err) {
//     return { error: err.response.data.message }
// }
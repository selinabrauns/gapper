import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

const Api = {
  get: url => axiosInstance.get(url).then(res => res),

  post: (url, reqBody) => axiosInstance.post(url, reqBody).then(res => res),

  put: (url, reqBody) => axiosInstance.put(url, reqBody).then(res => res),

  delete: url => axiosInstance.delete(url).then(res => res)
};

export default Api;
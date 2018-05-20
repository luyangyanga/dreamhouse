import axios from 'axios';
import apiConfig from './apiConfig';

function fetch(url, method = 'get', data = {}, flag = '') {
  const instance = axios.create({
    baseURL: apiConfig.baseUrl,
  });
  // http request 拦截器
  instance.interceptors.request.use(
    (config) => {
      const res = config;

      if (
        localStorage.getItem('token') &&
        localStorage.getItem('token') !== '' &&
        flag !== 'createAgentUser'
      ) {
        res.headers.Authorization = localStorage.token;
        res.headers.Accept = 'application/json';
      }
      return res;
    },
    (err) => {
      const error = err;
      return Promise.reject(error);
    },
  );

  // http response 拦截器
  instance.interceptors.response.use(
    (response) => {
      const res = response;
      return res;
    },
    (err) => {
      const error = err;
      if (error.response) {
        // if (error.response.status === 401) {
        //   // 返回 401 清除token信息并跳转到登录页面
        //   localStorage.token = null;
        //   router.replace({
        //     path: '/',
        //     query: { redirect: router.currentRoute.fullPath },
        //   });
        // }
      }
      return Promise.reject(error.response.data); // 返回接口返回的错误信息
    },
  );
  switch (method) {
    case 'get':
      return instance.get(url, { params: data });
    case 'post':
      return instance.post(url, data);
    case 'put':
      return instance.put(url, data);
    case 'delete':
      return instance.delete(url, data);
    default:
      return instance.get(url, { params: data });
  }
}

async function request(url, method = 'get', data = {}, flag = '') {
  const returnData = await fetch(url, method, data, flag)
    .then((res) => {
      const result = res;
      return result;
    })
    .catch((err) => {
      const error = err;
      return error;
    });
  return returnData;
}
export default request;

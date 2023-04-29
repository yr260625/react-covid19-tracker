import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

// 基本設定
const axiosInstance = axios.create({
  baseURL: String(process.env.REACT_APP_COVID19_API_BASEURL),
  timeout: Number(process.env.REACT_APP_COVID19_API_TIMEOUT),
  headers: {
    'Content-Type': 'application/json',
  },
});

// API-Keyをヘッダーに追加
axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers['X-RapidAPI-Key'] = process.env.REACT_APP_COVID19_API_KEY;
  config.headers['X-RapidAPI-Host'] = process.env.REACT_APP_COVID19_API_HOST;
  return config;
});

export const Api = axiosInstance;

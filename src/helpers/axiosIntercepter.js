import axios from 'axios';
import envs from '../config/env';
import AsyncStorage from '@react-native-async-storage/async-storage';

let headers = {};

const axiosInstance = axios.create({
  baseURL: envs.BACKEND_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async config => {
    console.log('reached here');
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    console.log('returning errors');
    return Promise.reject(error);
  },
);

export default axiosInstance;

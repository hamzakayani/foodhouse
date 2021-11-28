// First we need to import axios.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userKey} from '../store/userSlice';
import {
  SERVER_URL_CUSTOMER,
  SERVER_URL_USER,
  SERVER_URL_ADMIN,
} from './constants';
import {IUserSessionData} from '../interfaces/IAuthData';

const instanceUser = axios.create({
  baseURL: SERVER_URL_USER,
});

const instanceCustomer = axios.create({
  baseURL: SERVER_URL_CUSTOMER,
});

const instanceAdmin = axios.create({
  baseURL: SERVER_URL_ADMIN,
});

const excludedUrls = ['user/login', 'customer/register', 'category/landing'];

instanceUser.interceptors.request.use(async function (config) {
  config.timeoutErrorMessage = 'Request Timed Out';
  console.log('Sending Request', config.url);
  if (
    config.baseURL === SERVER_URL_USER &&
    !excludedUrls.includes(config.url!)
  ) {
    let userData = await AsyncStorage.getItem(userKey);
    const parsedUser: IUserSessionData = JSON.parse(userData!);
    config.headers = {Authorization: 'Bearer ' + parsedUser.token};
  }
  return config;
});

instanceCustomer.interceptors.request.use(async function (config) {
  config.timeoutErrorMessage = 'Request Timed Out';
  if (
    config.baseURL === SERVER_URL_CUSTOMER &&
    !excludedUrls.includes(config.url!)
  ) {
    let userData = await AsyncStorage.getItem(userKey);
    const parsedUser: IUserSessionData = JSON.parse(userData!);
    config.headers = {Authorization: 'Bearer ' + parsedUser.token};
  }
  return config;
});

instanceAdmin.interceptors.request.use(async function (config) {
  config.timeoutErrorMessage = 'Request Timed Out';
  console.log('Sending Request', config.url);
  if (
    config.baseURL === SERVER_URL_ADMIN &&
    !excludedUrls.includes(config.url!)
  ) {
    let userData = await AsyncStorage.getItem(userKey);
    const parsedUser: IUserSessionData = JSON.parse(userData!);
    config.headers = {Authorization: 'Bearer ' + parsedUser.token};
  }
  return config;
});

export {
  instanceUser as httpUser,
  instanceCustomer as httpCustomer,
  instanceAdmin as httpAdmin,
};

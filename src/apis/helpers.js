import KEY from '../assets/AsynStorage';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {DeviceEventEmitter} from 'react-native';
import {DEVICE_EVENT_KEY} from '../config/constants';
const API_KEY =
  'eue823478uwuishdsfhjsd8939827389273897987wr837r98we7r8w9erwer7w9er7we8rw98er7';

axios.defaults.timeout = 10000;

export async function GetData(url, data) {
  const token = await AsyncStorage.getItem(KEY.TOKEN);
  let myRequest = {
    method: 'get',
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
      'x-api-key': API_KEY,
    },
    params: {
      ...data,
    },
    timeout: 30 * 1000,
    // withCredentials: true,
  };
  console.log('My request', myRequest);
  return await axios(myRequest)
    .then(response => response)
    .then(response => response)
    .catch(error => {
      console.log(error);
      if (error.request.status === 403 || error.request.status === 401) {
        DeviceEventEmitter.emit(DEVICE_EVENT_KEY.LOGOUT_EVENT);
      } else {
        const data = JSON.parse(error.request._response);
        const err = {
          message: data.message
            ? data.message
            : 'Có lỗi trong qúa trình xử lý!',
          status: error.request.status,
        };
        return err;
      }
    });
}

export async function PostLogin(url, json) {
  let myRequest = {
    method: 'post',
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
    timeout: 30 * 1000,
    data: JSON.stringify(json),
  };
  console.log('post data mobile', myRequest);
  return await axios(myRequest)
    .then(response => response)
    .then(response => response)
    .catch(error => {
      console.log('error', error);
      const err = {
        message: data.message ? data.message : 'Có lỗi trong qúa trình xử lý!',
        status: error.request.status,
      };
      return err;
    });
}

export async function PostData(url, json, data) {
  const token = await AsyncStorage.getItem(KEY.TOKEN);
  let myRequest = {
    method: 'post',
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
      'x-api-key': API_KEY,
    },
    timeout: 30 * 1000,
    data: JSON.stringify(json),
    params: {
      ...data,
    },
  };
  console.log('post data mobile', myRequest);
  return await axios(myRequest)
    .then(response => response)
    .then(response => response)
    .catch(error => {
      if (error.request.status === 401) {
        DeviceEventEmitter.emit(DEVICE_EVENT_KEY.LOGOUT_EVENT);
      } else {
        const data = JSON.parse(error.request._response);
        const err = {
          message: data.message
            ? data.message
            : 'Có lỗi trong qúa trình xử lý!',
          status: error.request.status,
        };
        return err;
      }
    });
}

export async function PostFormData(url, data) {
  const token = await AsyncStorage.getItem(KEY.TOKEN);
  let myRequest = {
    method: 'post',
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + token,
      'x-api-key': API_KEY,
    },
    timeout: 30 * 1000,
    data: data,
  };
  console.log('post data mobile', myRequest);
  return await axios(myRequest)
    .then(response => response)
    .then(response => response)
    .catch(error => {
      if (error.request.status === 401) {
        DeviceEventEmitter.emit(DEVICE_EVENT_KEY.LOGOUT_EVENT);
      } else {
        const data = JSON.parse(error.request._response);
        const err = {
          message: data.message
            ? data.message
            : 'Có lỗi trong qúa trình xử lý!',
          status: error.request.status,
        };
        return err;
      }
    });
}

/**
 *
 * @param {*} url is link api
 * @param {*} json is input format json to request server
 * @param {*} isAuth is state auth
 */
export async function PutData(url, json, param) {
  const token = await AsyncStorage.getItem(KEY.TOKEN);
  let myRequest = {
    method: 'put',
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
      'x-api-key': API_KEY,
    },
    data: JSON.stringify(json),
    params: {
      ...param,
    },
  };
  console.log('PutData', myRequest);
  return await axios(myRequest)
    .then(response => response)
    .then(response => response)
    .catch(error => {
      if (error.request.status === 401) {
        DeviceEventEmitter.emit(DEVICE_EVENT_KEY.LOGOUT_EVENT);
      } else {
        const data = JSON.parse(error.request._response);
        const err = {
          message: data.message
            ? data.message
            : 'Có lỗi trong qúa trình xử lý!',
          status: error.request.status,
        };
        return err;
      }
    });
}

/**
 *
 * @param {*} url is link api
 * @param {*} json is input format json to request server
 * @param {*} isAuth is state auth
 */
export async function DeleteData(url, json, param) {
  const token = await AsyncStorage.getItem(KEY.TOKEN);
  let myRequest = {
    method: 'delete',
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
      'x-api-key': API_KEY,
    },
    data: JSON.stringify(json),
    params: {
      ...param,
    },
  };
  console.log('DeleteData', myRequest);
  return await axios(myRequest)
    .then(response => response)
    .then(response => response)
    .catch(error => {
      if (error.request.status === 401) {
        DeviceEventEmitter.emit(DEVICE_EVENT_KEY.LOGOUT_EVENT);
      } else {
        const data = JSON.parse(error.request._response);
        const err = {
          message: data.message
            ? data.message
            : 'Có lỗi trong qúa trình xử lý!',
          status: error.request.status,
        };
        return err;
      }
    });
}

export async function GetDataCommon(url, data) {
  let myRequest = {
    method: 'get',
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    params: {
      ...data,
    },
    timeout: 30 * 1000,
  };
  console.log('My request', myRequest);
  return await axios(myRequest)
    .then(response => response)
    .then(response => response)
    .catch(error => {
      console.log('error', error);
      if (error.request.status === 403 || error.request.status === 401) {
        DeviceEventEmitter.emit(DEVICE_EVENT_KEY.LOGOUT_EVENT);
      } else {
        const data = JSON.parse(error.request._response);
        const err = {
          message: data.message
            ? data.message
            : 'Có lỗi trong qúa trình xử lý!',
          status: error.request.status,
        };
        return err;
      }
    });
}

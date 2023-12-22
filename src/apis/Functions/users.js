import {PostLogin, PostData, GetData, PostFormData} from '../helpers';

import url from '../url';

export const checkPhoneNumber = async params =>
  PostLogin(url.checkPhoneNumber, params)
    .then(res => res)
    .catch(err => err);

export const verifyOTP = async params =>
  PostLogin(url.verifyOTP, params)
    .then(res => res)
    .catch(err => err);

export const signUp = async body =>
  PostLogin(url.signUp, body)
    .then(res => res)
    .catch(err => err);

export const login = async body =>
  PostData(url.login, body)
    .then(res => res)
    .catch(err => err);

export const requestSendOTP = async body =>
  PostData(url.urlrequestSendOTP, body)
    .then(res => res)
    .catch(err => err);
export const confirmOTP = async body =>
  PostData(url.urlConfirmOTP, body)
    .then(res => res)
    .catch(err => err);

export const uploadFontIdentify = async body =>
  PostFormData(url.urlFontIdentify, body)
    .then(res => res)
    .catch(err => err);
export const uploadBackIdentify = async body =>
  PostFormData(url.urlBackIdentify, body)
    .then(res => res)
    .catch(err => err);

export const verifyCustomer = async body =>
  PostData(url.verifyCustomer, body)
    .then(res => res)
    .catch(err => err);
export const logoutAPI = async body =>
  PostData(url.logout, body)
    .then(res => res)
    .catch(err => err);
export const changePass = async body =>
  PostData(url.changePass, body)
    .then(res => res)
    .catch(err => err);
export const myTeam = async body =>
  PostData(url.myTeam, body)
    .then(res => res)
    .catch(err => err);

export const sendCodeChangePass = async param =>
  GetData(url.sendCodeChangePass, param)
    .then(res => res)
    .catch(err => err);
//Secretcode
export const createSecretCode = async body =>
  PostData(url.createSecretCode, body)
    .then(res => res)
    .catch(err => err);
export const updateSecretCode = async body =>
  PostData(url.updateSecretCode, body)
    .then(res => res)
    .catch(err => err);

export const sendCodeForgetSecretKey = async params =>
  GetData(url.sendCodeSecret, params)
    .then(res => res)
    .catch(err => err);

export const renewSecret = async body =>
  PostData(url.renewSecret, body)
    .then(res => res)
    .catch(err => err);
export const getTeams = async body =>
  PostData(url.renewSecret, body)
    .then(res => res)
    .catch(err => err);

export const myContractAPI = async params =>
  GetData(url.myContract, params)
    .then(res => res)
    .catch(err => err);
export const reportCustomer = async body =>
  PostData(url.reportCustomer, body)
    .then(res => res)
    .catch(err => err);

export const changePhone = async body =>
  PostData(url.changePhone, body)
    .then(res => res)
    .catch(err => err);

export const sendOTPChangePhone = async body =>
  PostData(url.sendOTPChangePhone, body)
    .then(res => res)
    .catch(err => err);

export const updateUserInfo = async body =>
  PostData(url.updateCusInfor, body)
    .then(res => res)
    .catch(err => err);

export const changeAvatart = async body =>
  PostData(url.changeAvatart, body)
    .then(res => res)
    .catch(err => err);
export const sendCodeForgetPassword = async body =>
  PostData(url.sendCodeForgetPassword, body)
    .then(res => res)
    .catch(err => err);

export const updateCusForgetPassword = async body =>
  PostData(url.updateCusForgetPassword, body)
    .then(res => res)
    .catch(err => err);

//Previous
export const getUserInfo = async param =>
  GetData(url.getUserInfo, param)
    .then(res => res)
    .catch(err => err);

export const getProvinceList = async () =>
  PostData(url.getProvinceList, {addressLevel: 1})
    .then(res => res)
    .catch(err => err);

export const getMyTeam = async params =>
  PostData(url.myTeam, params)
    .then(res => res)
    .catch(err => err);

export const uploadAvatarAPI = async body =>
  PostFormData(url.uploadAvatar, body)
    .then(res => res)
    .catch(err => err);

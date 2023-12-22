import {
  PostLogin,
  PostData,
  GetData,
  PostFormData,
  PostHaveKey,
} from '../helpers';

import url from '../url';

export const getInforGeneral = async params =>
  GetData(url.getInforGeneral, params)
    .then(res => res)
    .catch(err => err);
export const getListInvestPackage = async params =>
  GetData(url.getListInvestPackage, params)
    .then(res => res)
    .catch(err => err);
export const getConfigPoint = async params =>
  GetData(url.getConfigPoint, params)
    .then(res => res)
    .catch(err => err);

export const changePoint = async params =>
  PostData(url.changePoint, params)
    .then(res => res)
    .catch(err => err);

export const getListNoti = async params =>
  PostData(url.getListNoti, params)
    .then(res => res)
    .catch(err => err);

export const detailNoti = async id =>
  GetData(`${url.detailNoti}/${id}`, {})
    .then(res => res)
    .catch(err => err);

export const decryptData = async (body, key) =>
  PostHaveKey(url.urlDecryptData, body, key)
    .then(res => res)
    .catch(err => null);

export const getKey = async body =>
  GetData(url.getKey, body)
    .then(res => res)
    .catch(err => null);

export const listRanking = async params =>
  GetData(url.listRanking, params)
    .then(res => res)
    .catch(err => err);

export const detailRanking = async id =>
  GetData(`${url.detailRanking}/${id}`, {})
    .then(res => res)
    .catch(err => err);

export const getNewestVersionInfo = async id =>
  GetData(`${url.getNewestVersionInfo}/${id}`, {})
    .then(res => res)
    .catch(err => err);

export const listBannerAPI = async params =>
  PostData(url.listBanner, params)
    .then(res => res)
    .catch(err => err);

export const getInforSetting = async params =>
  GetData(url.inforSetting, params)
    .then(res => res)
    .catch(err => err);
export const changeSetting = async params =>
  PostData(url.changeSetting, params)
    .then(res => res)
    .catch(err => err);
export const systemConfig = async params =>
  GetData(url.systemConfig, params)
    .then(res => res)
    .catch(err => err);

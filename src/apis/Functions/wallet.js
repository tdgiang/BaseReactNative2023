import {GetData, PostData} from '../helpers';
import url from '../url';

export const getWalletInfo = async params =>
  GetData(url.getWalletInfo, params)
    .then(res => res)
    .catch(err => err);

export const depositsRequest = async params =>
  PostData(url.depositsRequest, params)
    .then(res => res)
    .catch(err => err);
export const withdrawRequest = async params =>
  PostData(url.withdrawRequest, params)
    .then(res => res)
    .catch(err => err);

export const getListTrans = async params =>
  PostData(url.getListTrans, params)
    .then(res => res)
    .catch(err => err);

export const detailTrans = async id =>
  GetData(`${url.detailTrans}/${id}`, {})
    .then(res => res)
    .catch(err => err);

export const inforBankTrans = async params =>
  GetData(url.inforBankTrans, params)
    .then(res => res)
    .catch(err => err);

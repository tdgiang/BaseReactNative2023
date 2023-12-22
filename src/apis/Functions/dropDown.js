import {PostLogin, PostData, GetData, PostFormData} from '../helpers';

import url from '../url';

export const listProvince = async params =>
  GetData(url.listProvince, params)
    .then(res => res)
    .catch(err => err);

export const dropdownBank = async params =>
  GetData(url.dropdownBank, params)
    .then(res => res)
    .catch(err => err);

export const dropdownBankCredit = async params =>
  GetData(url.dropdownBankCredit, params)
    .then(res => res)
    .catch(err => err);

export const dropdownCreditType = async id =>
  GetData(`${url.dropdownCreditType}/${id}`, {})
    .then(res => res)
    .catch(err => err);

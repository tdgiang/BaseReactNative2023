import {put, takeLatest} from 'redux-saga/effects';
// @ts-ignore

import {UPDATE_WALLET, UPDATE_WALLET_SUCCESS} from '../actions/actionTypes';
import {getWalletInfo} from '../apis/Functions/wallet';

function* updateWallet() {
  try {
    const res = yield getWalletInfo();
    if (res.data.code == 200 && res.data.data) {
      yield put({
        type: UPDATE_WALLET_SUCCESS,
        data: res.data.data,
      });
    }
  } catch (error) {}
}

export function* watchUpdateWallet() {
  yield takeLatest(UPDATE_WALLET, updateWallet);
}

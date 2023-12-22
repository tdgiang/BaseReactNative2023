import {call, all} from 'redux-saga/effects';
import {watchUpdateUser} from './userSaga';
import {watchUpdateWallet} from './walletSaga';
export default function* rootSaga() {
  yield all([call(watchUpdateUser), call(watchUpdateWallet)]);
}

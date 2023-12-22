import {put, takeLatest} from 'redux-saga/effects';
import {getInforGeneral} from '../apis/Functions/home';
import {UPDATE_USER_SUCCESS, UPDATE_INFOR} from '../actions/actionTypes';

function* updateUser(action) {
  try {
    const res = yield getInforGeneral();

    if (res.data.code == 200 && res.data.data) {
      yield put({
        type: UPDATE_USER_SUCCESS,
        data: res.data.data,
      });
    }
  } catch (error) {}
}

export function* watchUpdateUser() {
  yield takeLatest(UPDATE_INFOR, updateUser);
}

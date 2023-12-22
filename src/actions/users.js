import { LOGIN, WALLET_INFO, UPDATE_INFOR } from "./actionTypes";

export function saveUserToRedux(data) {
  return {
    type: LOGIN,
    data,
  };
}

export function saveWalletInfo(data) {
  return {
    type: WALLET_INFO,
    data,
  };
}

export function updateUser() {
  return {
    type: UPDATE_INFOR,
  };
}

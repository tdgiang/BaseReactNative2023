import { LOGIN, UPDATE_USER_SUCCESS } from "../actions/actionTypes";

const initialState = {
  isSignedIn: false,
  expiredTime: new Date(),
  userInfo: {},
  walletInfo: {},
};
// @ts-ignore
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      let user = action.data;
      return { ...action.data, isSignedIn: user !== null, userInfo: user };
    }
    case UPDATE_USER_SUCCESS: {
      let user = action.data;
      return { ...state, userInfo: user };
    }
    default:
      return state;
  }
}

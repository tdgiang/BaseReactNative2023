import { UPDATE_WALLET_SUCCESS } from "../actions/actionTypes";

const initialState = {
  id: 1.0,
  amount: 0,
  point: 0,
  benifit_yesterday: null,
  total_notification_not_read: 0,
};
// @ts-ignore
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_WALLET_SUCCESS: {
      return { ...action.data };
    }
    default:
      return state;
  }
}

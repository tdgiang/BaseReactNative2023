import { UPDATE_SYSTEM_CONFIG } from "../actions/actionTypes";

const initialState = {
  point_exchange_ratio: 20,
  point_exchange_minimum: 1000,
  trans_fee: 0.025,
  pull_card_fee: 0.02,
  insurance_fee: 0,
  is_insurrance: true,
  customer_f1_percent: 10.0,
  customer_f2_percent: 3.0,
  customer_f3_percent: 2.0,
};
// @ts-ignore
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SYSTEM_CONFIG: {
      return { ...action.data };
    }
    default:
      return state;
  }
}

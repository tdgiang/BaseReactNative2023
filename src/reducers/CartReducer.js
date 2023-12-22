import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_CART,
} from "../actions/actionTypes";

const initialState = [];
// @ts-ignore
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      let newList = state.concat(action.data);
      return newList;
    }
    case REMOVE_PRODUCT: {
      const newList = state.filter((e) => e.id != action.data);
      return newList;
    }

    case CLEAR_CART: {
      return [];
    }

    default:
      return state;
  }
}

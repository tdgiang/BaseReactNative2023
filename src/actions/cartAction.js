import { REMOVE_PRODUCT, ADD_PRODUCT, CLEAR_CART } from "./actionTypes";

export const addProduct = (item) => {
  return {
    type: ADD_PRODUCT,
    data: item,
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    data: id,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

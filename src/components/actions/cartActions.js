import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  VEGETARIAN,
  GLUTEN_FREE,
  SHOW_ALL,
  ORGANIC,
} from "./action-types/cart-actions";

//add cart action
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};
//remove item action
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};
//subtract qt action
export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
//add qt action
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};

export const vegatarianFilter = () => {
  return {
    type: VEGETARIAN,
  };
};
export const glutenFreeFilter = () => {
  return {
    type: GLUTEN_FREE,
  };
};

export const showAllFilter = () => {
  return {
    type: SHOW_ALL,
  };
};

export const organicFilter = () => {
  return {
    type: ORGANIC,
  };
};

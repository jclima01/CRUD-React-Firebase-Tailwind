import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  EDIT_PRODUCT,
} from "../actions/actions.js";

const initialState = { products: [] };

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
      };
    case DELETE_PRODUCT:
      const filteredProducts = state.products.filter((product) => product.id !== payload)
      return {
        ...state,
        products: filteredProducts,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
export default rootReducer
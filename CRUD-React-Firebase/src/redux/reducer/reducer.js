import { ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCTS, EDIT_PRODUCT } from "../actions/actions";

const initialState = {
  products: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return { ...state };
  }
};
export default rootReducer;

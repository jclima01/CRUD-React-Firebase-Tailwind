import { collection, getDocs } from "firebase/firestore";
import {db} from '../../../firebase/firebase.js'
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const EDIT_PRODUCT = "EDIT_PRODUCT";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};

export const getProducts = () => async (dispatch) => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = querySnapshot.docs.map((doc) => doc.data());
  console.log(products)
  dispatch({
    type: GET_PRODUCTS,
    payload: products,
  });
};


import { addDoc, collection, getDocs } from "firebase/firestore";
import {db} from '../../../firebase/firebase.js'
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const EDIT_PRODUCT = "EDIT_PRODUCT";

export const addProduct = (product) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "products"), product);
    const productWithId = { ...product, id: docRef.id };
    dispatch({
      type: ADD_PRODUCT,
      payload: productWithId,
    });
  } catch (error) {
    console.error("Error adding product: ", error);
  }
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};


export const getProducts = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    dispatch({
      type: GET_PRODUCTS,
      payload: products,
    });
  } catch (error) {
    console.error("Error getting products: ", error);
  }
};

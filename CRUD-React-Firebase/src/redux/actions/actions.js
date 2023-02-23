import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import {db} from '../../../firebase/firebase.js'
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
import { v4 as uuidv4 } from 'uuid';
export const addProduct = (product) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "products"), product);
    const productWithId = { ...product, id: docRef.id, prodID: uuidv4()};
    dispatch({
      type: ADD_PRODUCT,
      payload: productWithId,
    });
  } catch (error) {
    console.error("Error adding product: ", error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
   try{
     await deleteDoc(doc(db, "products", id));
       dispatch({
         type: DELETE_PRODUCT,
         payload: id,
       });
   } catch (error) {
    console.error("Error deleting product: ", error);
   }
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

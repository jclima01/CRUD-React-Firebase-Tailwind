import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer/reducer.js";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

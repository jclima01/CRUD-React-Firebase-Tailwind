import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducer/reducer.js'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
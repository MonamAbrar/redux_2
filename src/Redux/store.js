import { createStore } from "redux";

import interfaceReducer from "./Reducers/interfaceReducer";
import formReducer from "./Reducers/formReducer";
import { combineReducers } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  interface: interfaceReducer,
  form: formReducer,
});


const store =createStore(rootReducer, composeWithDevTools());


export default store;
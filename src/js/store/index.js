import { createStore , combineReducers } from "redux";
import createReducer from "../Reducer/index";
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    createUser: createReducer,
    form: formReducer
  });
  
const store = createStore(rootReducer);

export default store;
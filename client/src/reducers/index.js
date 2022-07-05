import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import product from './product'
import ui from './ui'
import selectTMseries from './selectTMseries'
import userTable from './userTable'
import logInPage from './logInPage'
import signInPage from './signInPage'
import UserList from './user'
import isLocal from './userLocalStorage'
import cartTable from './cartTable'
import handleCart from "./handleCart";

const rootReducer = combineReducers({
  product: product,
  UserList: UserList,
  ui: ui,
  selectTMseries: selectTMseries,
  form: formReducer,
  userTable: userTable,
  logInPage: logInPage,
  signInPage: signInPage,
  isLocal: isLocal,
  cartTable: cartTable,
  handleCart: handleCart,
});

export default rootReducer;

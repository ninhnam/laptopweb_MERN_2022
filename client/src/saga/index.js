/** @format */

import {
  call,
  put,
  delay,
  takeEvery,
} from "redux-saga/effects";
import * as productsTypes from "./../constants/product";
import * as userTypes from "./../constants/user";
import {getProductsSuccess, getProductsFail, addCartFail, addCartSuccess} from "./../actions/product";
import { STATUS_CODE} from "./../constants/index";
import {addTask, getListProducts, getListUsers, updateCart} from "./../apis/product";
import {showLoading, hideLoading} from "../actions/ui";
import {
  getUsersFail,
  getUsersSuccess,
  SignInUserFail,
  SignInUserSuccess,
} from "../actions/user";

function* getProductsSaga({payload}) {
  yield put(showLoading());
  const {params} = payload;

  const resp = yield call(getListProducts, params);
  const {status, data} = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(getProductsSuccess(data));
  } else {
    yield put(getProductsFail(data));
  }

  const respUser = yield call(getListUsers, params);
  const {status: statusUser, data: dataUsers} = respUser;
  if (statusUser === STATUS_CODE.SUCCESS) {
    yield put(getUsersSuccess(dataUsers));
  } else {
    yield put(getUsersFail(dataUsers));
  }

  yield delay(700);
  yield put(hideLoading());
}

function* signInSaga({payload}) {
  yield put(showLoading());
  const {params} = payload;

  const resp = yield call(addTask, params);
  const {status, data} = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(SignInUserSuccess(data));
  } else {
    yield put(SignInUserFail(data));
  }

  const respUser = yield call(getListUsers, params);
  const {status: statusUser, data: dataUsers} = respUser;
  if (statusUser === STATUS_CODE.SUCCESS) {
    yield put(getUsersSuccess(dataUsers));
  } else {
    yield put(getUsersFail(dataUsers));
  }

  yield delay(500);
  yield put(hideLoading());
}

function* addProductToCart({payload}) {
  yield put(showLoading());
  const {params} = payload;

  const resp = yield call(updateCart, params.data, params.ID);
  console.log(params.data)
  const {status, data} = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(addCartSuccess(data, params.mess));
  } else {
    yield put(addCartFail(data));
  }

  yield delay(500);
  yield put(hideLoading());
}

function* rootSaga() {
  yield takeEvery(productsTypes.GET_PRODUCT, getProductsSaga);
  yield takeEvery(userTypes.SIGN_IN, signInSaga);
  yield takeEvery(productsTypes.ADD_CART, addProductToCart);
}

export default rootSaga;

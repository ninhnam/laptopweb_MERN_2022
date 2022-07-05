/** @format */

import * as uiTypes from "./../constants/ui";

export const showLoading = () => ({
  type: uiTypes.SHOW_LOADING,
});

export const hideLoading = () => ({
  type: uiTypes.HIDE_LOADING,
});

export const toggleUserTable = () => {
  return {
    type: uiTypes.USER_TABLE_TOGGLE,
  };
}


export const toggleLogIn = () => {
  return {
    type: uiTypes.LOGIN_PAGE,
  };
}

export const toggleSignIn = () => {
  return {
    type: uiTypes.SIGNIN_PAGE,
  };
}

export const toggleCartTable = () => {
  return {
    type: uiTypes.CART_TABLE,
  };
}


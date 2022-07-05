/** @format */

import * as types from "./../constants/product";
import {toastError, toastSuccess} from "./../helper/toastHelper";

var initialState = {}

const product = (state = initialState, action) => {

  switch (action.type) {
    
    case types.GET_PRODUCT_SUCCESS: {
      return action.payload.data
    }

    case types.GET_PRODUCT_FAIL: {
      let {error} = action.payload;
      toastError(error);
      return state;
    }


    default:
      return state;
  }
};

export default product;

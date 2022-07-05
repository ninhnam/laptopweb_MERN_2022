/** @format */

import * as types from "../constants/product";
import { toastError,toastSuccess } from './../helper/toastHelper'

const initialState = [];

const handleCart = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CART_SUCCESS': {
      return action.payload.data.data
    }
    case 'GET_CART_FAIL': {
      return []
    }
    case 'DEL_CART_SUCCESS': {
      return action.payload.data.data
    }
    case 'ADD_CART_SUCCESS': {
      return action.payload.data.data
    }
    case 'UPDATE_CART_SUCCESS': {
      return action.payload.data.data
    }
    // case types.ADD_CART_FAIL: {
    //   toastError('Thêm vào giỏ hàng thất bại')
    // }

    default:
      return state;
  }
};

export default handleCart;

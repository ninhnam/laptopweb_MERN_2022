/** @format */

import product from "../reducers/product";
import * as productConstant from "./../constants/product";
import {toastError, toastSuccess} from '../helper/toastHelper'

export const getProducts = (params = {}) => {
  return {
    type: productConstant.GET_PRODUCT,
    payload: {
      params,
    },
  };
};

export const getProductsSuccess = (data) => {
  return {
    type: productConstant.GET_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const getProductsFail = (error) => {
  return {
    type: productConstant.GET_PRODUCT_SUCCESS,
    payload: {
      error,
    },
  };
};

export const selectTMseries = (data) => {
  return {
    type: productConstant.SELECT_TRADEMARK_SERIES,
    payload: {
      data,
    },
  };
};

export const getCart = (data)  => async (dispatch) => {
  try {
    fetch("http://localhost:5000/api/v1/sort",
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data}`
          },
          method: "GET",
      })
      .then(data => data.json())
      .then(data => {
        dispatch({
          type: 'GET_CART_SUCCESS',
          payload: { data }
        })
      })

  } catch (err) {
    dispatch({
      type:'GET_CART_FAIL',
      err:err
    })
  }
}

export const deleteCart = (data)  => async (dispatch) => {
  try {
    fetch(`http://localhost:5000/api/v1/sort/${data.id}`,
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.token}`
          },
          method: "DELETE",
      })
      .then(data => data.json())
      .then(data => {
        dispatch({
          type: 'DEL_CART_SUCCESS',
          payload: { data }
        })
        toastSuccess("Xóa sản phẩm khỏi giỏ hàng thành công");
      })
      
    } catch (err) {
      dispatch({
        type:'DEL_CART_FAIL',
        err:err
      })
      toastError("Xóa sản phẩm khỏi giỏ hàng thất bại");
  }
}

export const addCart = (data) => async (dispatch) => {
  try {
    fetch(`http://localhost:5000/api/v1/sort`,
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${data.token}`
        },
        method: "POST",
        body: JSON.stringify(data.product) 
    })
    .then(data => data.json())
    .then(data => {
      toastSuccess("Thêm sản phẩm vào giỏ hàng thành công");
      dispatch({
        type: 'ADD_CART_SUCCESS',
        payload: { data }
      })
    })
    
  } catch (error) {
    toastError("Thêm sản phẩm vào giỏ hàng thất bại");
    dispatch({
      type:'ADD_CART_FAIL',
      err:error
    })
  }
}

export const updateCart = (data) => async (dispatch) => {
  try {
    fetch(`http://localhost:5000/api/v1/sort/${data.product._id}`,
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${data.token}`
        },
        method: "PUT",
        body: JSON.stringify(data.product)
    })
    .then(data => data.json())
    .then(data => {
      toastSuccess("Sửa sản phẩm trong giỏ hàng thành công");
      dispatch({
        type: 'UPDATE_CART_SUCCESS',
        payload: { data }
      })
    })
    
  } catch (error) {
    toastError("Sửa sản phẩm trong giỏ hàng thất bại");
    dispatch({
      type:'UPDATE_CART_FAIL',
      err:error
    })
  }
}

export const addCartSuccess = (data, mess) => {
  localStorage.removeItem("NinhNamUser");
  localStorage.setItem("NinhNamUser", JSON.stringify(data));
  return {
    type: productConstant.ADD_CART_SUCCESS,
    payload: {
      data,
      mess
    },
  };
};

export const addCartFail = (error) => {
  return {
    type: productConstant.ADD_CART_FAIL,
    payload: {
      error,
    },
  };
};

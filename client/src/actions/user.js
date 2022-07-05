/** @format */
import axios from 'axios'

import * as productConstant from "../constants/user";
import * as userConstant from "../constants/user";
import { toastError, toastSuccess } from '../helper/toastHelper';
import { toggleLogIn } from './ui';

export const getUsers = (params = {}) => {
  return {
    type: productConstant.GET_LIST_USER,
    payload: {
      params,
    },
  };
};

export const getUsersSuccess = (data) => {
  return {
    type: productConstant.GET_LIST_USER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const getUsersFail = (error) => {
  return {
    type: productConstant.GET_LIST_USER_FAILED,
    payload: {
      error,
    },
  };
};

// export const SignInUser = (params = {}) => {
//   return {
//     type: userConstant.SIGN_IN,
//     payload: {
//       params,
//     },
//   };
// };

export const SignInUser = (data) => async (dispatch) => {
  try {
    await fetch("http://localhost:5000/api/v1/auth/register",
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(data)
      })
      // .then(function(res){ console.log(res.json()) })
    dispatch({
      type: userConstant.SIGN_IN_SUCCESS,
      payload: { data }
    })
  } catch (err) {
    dispatch({
      type: userConstant.SIGN_IN_FAILED,
      payload: { msg: err }
    })
    
  }
}

export const LogInUser = (data) => async (dispatch) => {
  try {
    await fetch("http://localhost:5000/api/v1/auth/login",
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(data)
      })
      .then(data => data.json())
      .then(data => {
        localStorage.removeItem("NinhNamUser");
        localStorage.setItem("NinhNamUser", JSON.stringify(data));
      })
    dispatch({
      type: 'LOGIN_PAGE_SUCCESS',
      payload: { data }
    })
    toggleLogIn()
    toastSuccess("Đăng nhập thành công");
  } catch (err) {
    toastError("Đăng nhập thất bại, tên đăng nhập hoặc mật khẩu không đúng");
    dispatch({
      type: 'LOGIN_PAGE_FAIL',
      payload: { msg: err }
    })
    
  }
}

export const SignInUserSuccess = (data) => {
  return {
    type: userConstant.SIGN_IN_SUCCESS,
    payload: {
      data,
    },
  };
};

export const SignInUserFail = (error) => {
  return {
    type: userConstant.SIGN_IN_FAILED,
    payload: {
      error,
    },
  };
};

export const changeUserLocal = () => {
  return {
    type: userConstant.CHANGE_USER_LOCAL_STORAGE,
  };
};

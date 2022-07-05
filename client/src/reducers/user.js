/** @format */

import * as types from "../constants/user";
import {toastError, toastSuccess} from "../helper/toastHelper";

var initialState = {}

const user = (state = initialState, action) => {

  switch (action.type) {
    
    case types.GET_LIST_USER_SUCCESS: {
      return action.payload.data
    }

    case types.GET_LIST_USER_FAILED: {
      let {error} = action.payload;
      toastError(error);
      return state;
    }


    default:
      return state;
  }
};

export default user;

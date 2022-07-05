/** @format */

import * as types from "./../constants/product";
import {toastError, toastSuccess} from "./../helper/toastHelper";

var initialState = {
    Latitude: false,
    Inspiron: false,
    Vostro: false,
    Pavillon: false,
    Envy: false,
    Probook: false,
    XSeries: false,
    TSeries: false,
    PSeries: false,
  }

const selectTMseries = (state = initialState, action) => {
  switch (action.type) {

    case types.SELECT_TRADEMARK_SERIES: 
        console.log(action.payload.data)
        console.log(action.payload.data)
        return action.payload.data;

    default:
      return state;
  }
};

export default selectTMseries;

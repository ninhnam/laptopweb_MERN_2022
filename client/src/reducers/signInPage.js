import * as types from '../constants/ui'
import {SIGN_IN_SUCCESS, SIGN_IN_FAILED} from '../constants/user'
import {toastError, toastSuccess} from "./../helper/toastHelper";

const initialState = true

const reducer = (state = initialState , action) => {
    switch(action.type){
        case types.SIGNIN_PAGE: {
            return !state
        }

        case SIGN_IN_SUCCESS: {
            toastSuccess('Đăng kí thành công')
        }

        case SIGN_IN_FAILED: {
            toastError('Đăng kí thất bại')
        }

        default: 
            return state;
    }
}

export default reducer
import * as types from '../constants/ui'

const initialState = true

const reducer = (state = initialState , action) => {
    switch(action.type){
        case types.LOGIN_PAGE: {
            return !state
        }
        case 'LOGIN_PAGE_SUCCESS': {
            return true
        }
        case 'LOGIN_PAGE_FAIL': {
            return false
        }

        default: 
            return state;
    }
}

export default reducer
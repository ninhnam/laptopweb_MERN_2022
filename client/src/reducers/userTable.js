import * as types from './../constants/ui'

const initialState = false

const reducer = (state = initialState , action) => {
    switch(action.type){
        case types.USER_TABLE_TOGGLE: {
            return !state
        }

        default: 
            return state;
    }
}

export default reducer
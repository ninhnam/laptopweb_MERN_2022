import * as types from '../constants/user'

const initialState = JSON.parse(localStorage.getItem("NinhNamUser"))

const reducer = (state = initialState , action) => {
    switch(action.type){
        case types.CHANGE_USER_LOCAL_STORAGE: {
            // const isLocal = JSON.parse(localStorage.getItem("NinhNamUser"))
            // const isOK = Boolean(isLocal)
            // console.log('local', isOK, isLocal)
            return !state
        }

        default: 
            return state;
    }
}

export default reducer
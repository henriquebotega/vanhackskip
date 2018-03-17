import { LOAD_DATA_REQUEST, LOAD_DATA_SUCCESS } from '../actions/SignInUp'

const initialState = {
    token: '',
    loading: false
}

const signInUpReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_DATA_REQUEST:
            return {
                loading: true
            }
        case LOAD_DATA_SUCCESS:
            return {
                token: action.token
            }
        default:
            return state
    }
}

export default signInUpReducer
import { getToken, getUser } from '../../config/auth';
import { SIGN, SIGN_LOADING, SIGN_UP } from './action.sign'

const INITIAL_STATE = {
    loading: false,
    token: getToken() || "",
    user: getUser() || {},
} 

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN:
            state.token = action.data.token;
            state.user = action.data.user
            state.loading = false
            return state
        case SIGN_LOADING:
            state.loading = action.loading
            return state;
        case SIGN_UP:
            state.loading = false;
            return state;

        default:
            return state;
    }
}

export default reducer
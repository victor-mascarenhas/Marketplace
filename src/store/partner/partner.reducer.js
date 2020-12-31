import { PARTNER_LOADING, GET_PARTNER } from './partner.action'

const INITIAL_STATE = {
    products: [],
    loading: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PARTNER:
            state.products = action.data.products;
            state.loading = false
            return state
        case PARTNER_LOADING:
            state.loading = action.status;
            return state;

        default:
            return state;
    }
}

export default reducer
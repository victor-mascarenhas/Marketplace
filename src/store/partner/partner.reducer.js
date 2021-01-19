import { PARTNER_LOADING, GET_PARTNER, GET_PARTNER_PRODUCTS, PATCH_PARTNER, GET_ALL_PARTNERS } from './partner.action'

const INITIAL_STATE = {
    all: [],
    products: [],
    loading: false,
    partner: {}
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PARTNER:
            state.partner = action.data;
            state.loading = false
            return state
        case GET_ALL_PARTNERS:
            state.all = action.data;
            state.loading = false
            return state
        case GET_PARTNER_PRODUCTS:
            state.products = action.data.products;
            state.loading = false
            return state
        case PARTNER_LOADING:
            state.loading = action.status;
            return state;
        case PATCH_PARTNER:
            state.loading = false;
            return state;

        default:
            return state;
    }
}

export default reducer
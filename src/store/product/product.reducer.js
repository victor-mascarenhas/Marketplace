import { PRODUCT_LOADING, GET_PRODUCTS, CREATE_PRODUCT } from './product.action'

const INITIAL_STATE = {
    all: [],
    loading: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            state.all = action.data;
            state.loading = false
            return state
        case PRODUCT_LOADING:
            state.loading = action.status;
            return state;
        case CREATE_PRODUCT:
            state.loading = false;
            return state;

        default:
            return state;
    }
}

export default reducer
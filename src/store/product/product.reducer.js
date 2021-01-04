import { PRODUCT_LOADING, GET_PRODUCTS, CREATE_PRODUCT, PATCH_PRODUCT, SET_PRODUCTS, DELETE_PRODUCT } from './product.action'

const INITIAL_STATE = {
    all: [],
    loading: false,
    edit: {}
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
        case PATCH_PRODUCT:
            state.loading = false;
            return state;
        case SET_PRODUCTS:
            state.edit = action.data;
            return state;
        case DELETE_PRODUCT:
            state.loading = false;
            return state;

        default:
            return state;
    }
}

export default reducer
import { USER_LOADING, GET_SHOPPING_CART, ADD_PRODUCT, REMOVE_PRODUCT  } from './user.action'

const INITIAL_STATE = {
    shoppingCart: [],
    loading: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SHOPPING_CART:
            state.shoppingCart = action.data.products;
            state.loading = false
            return state
        case USER_LOADING:
            state.loading = action.status;
            return state;
            case ADD_PRODUCT:
            state.loading = false;
            return state;
            case REMOVE_PRODUCT:
            state.loading = false;
            return state;

        default:
            return state;
    }
}

export default reducer
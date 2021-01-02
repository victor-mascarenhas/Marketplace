import { CATEGORY_LOADING, GET_CATEGORIES, CREATE_CATEGORY } from './category.action'

const INITIAL_STATE = {
    all: [],
    loading: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            state.all = action.data;
            state.loading = false
            return state
        case CATEGORY_LOADING:
            state.loading = action.status;
            return state;
        case CREATE_CATEGORY:
            state.loading = false;
            return state;

        default:
            return state;
    }
}

export default reducer
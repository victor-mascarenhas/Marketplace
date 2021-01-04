import { CATEGORY_LOADING, GET_CATEGORIES, CREATE_CATEGORY, PATCH_CATEGORY, SET_CATEGORIES, DELETE_CATEGORY } from './category.action'

const INITIAL_STATE = {
    all: [],
    loading: false,
    edit: {}
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
        case PATCH_CATEGORY:
            state.loading = false;
            return state;
        case SET_CATEGORIES:
            state.edit = action.data;
            return state;
        case DELETE_CATEGORY:
            state.loading = false;
            return state;

        default:
            return state;
    }
}

export default reducer
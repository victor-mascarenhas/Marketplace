import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import {reducer as toastrReducer} from 'react-redux-toastr'
import thunk from 'redux-thunk'
import multi from 'redux-multi'

import SignReducer from './sign/reducer.sign'
import ProductReducer from './product/product.reducer'
import PartnerReducer from './partner/partner.reducer'
import CategoryReducer from './category/category.reducer'

const reducers = combineReducers({
    auth: SignReducer,
    toastr: toastrReducer,
    product: ProductReducer,
    partner: PartnerReducer,
    category: CategoryReducer
});

const middleware = [thunk, multi];

const compose = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(reducers, compose);

export default store;
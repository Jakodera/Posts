import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './Reducers'

const initialState = {};
const middleware = [thunk];

const Store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default Store;
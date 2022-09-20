import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import ProductReducer from './reducers/ProductReducer';

const reducers = combineReducers({
    products:ProductReducer
})

const middleware = applyMiddleware(thunk)
const newCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, newCompose(middleware))

export default store;
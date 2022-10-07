import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import ProductReducer from './reducers/ProductReducer';
import UserReducer from './reducers/UserReducer';

const reducers = combineReducers({
    products:ProductReducer,
    users:UserReducer
})

const middleware = applyMiddleware(thunk)
const newCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, newCompose(middleware))

export default store;
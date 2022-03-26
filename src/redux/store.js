import { createStore } from 'redux';
import { combineReducers } from 'redux';

import mainReducer from './main-reducer';

const reducers = combineReducers({
    tasks: mainReducer
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store

export default store
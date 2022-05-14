import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from './Categories/Categories';
import bookReducer from './Books/Books';

export const rootReducer = combineReducers({ categoriesReducer, bookReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

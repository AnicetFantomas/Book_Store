import { combineReducers, legacy_createStore as createStore } from 'redux';
import categoriesReducer from './Categories/Categories';
import bookReducer from './Books/Books';

export const rootReducer = combineReducers({ categoriesReducer, bookReducer });
const store = createStore(rootReducer);

export default store;

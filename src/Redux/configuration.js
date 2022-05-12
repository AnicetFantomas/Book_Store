import { combineReducers, legacy_createStore as createStore } from 'redux';
import categoriesReduce from './Categories/Categories';
import bookReducer from './Books/Books';

export const rootReducer = combineReducers({ categoriesReduce, bookReducer });
const store = createStore(rootReducer);

export default store;

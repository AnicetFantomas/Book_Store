import { combineReducers } from 'redux';
import categoriesReduce from './Categories/Categories';
import bookReducer from './Books/Books';

const rootReducer = combineReducers({ categoriesReduce, bookReducer });

export default rootReducer;

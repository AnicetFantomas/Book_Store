import { combineReducers, createStore } from 'redux';
import categoriesReduce from './Categories/Categories';
import bookReducer from './Books/Books';

const rootReducer = combineReducers({ categoriesReduce, bookReducer });
const store = createStore(rootReducer);

export default { rootReducer, store };

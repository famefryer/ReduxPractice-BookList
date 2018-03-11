import {combineReducers} from 'redux';
import BooksReducer from './reducers_book'
import ActiveBookReducer from './reducer_active_book'
const rootReducer = combineReducers({
  books:BooksReducer,
  selectBook:ActiveBookReducer
});

export default rootReducer;

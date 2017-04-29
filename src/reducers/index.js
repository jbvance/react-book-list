import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//Wire the application state (key) to the reducers (value)
//that way, when a reducer gets called, it only deals with the
//relevant part of the application state
//Any key provided to combineReducers ends up as a key on application state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;

import { combineReducers } from "redux";
import authorsReducer from 'reducers/authorsReducer';
import booksReducer from 'reducers/booksReducer';

const rootReducer = combineReducers({
    authors: authorsReducer, 
    books: booksReducer
});

export default rootReducer;


import { combineReducers } from "redux";
import { authorsReducer } from "./reducerModels/authorsReducer"
import { booksReducer } from "./reducerModels/booksReducer"
const rootReducer = combineReducers({
    authors: authorsReducer,
    books: booksReducer
});

export default rootReducer;




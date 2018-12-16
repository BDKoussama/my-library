import {combineReducers} from 'redux';
import navReducer from './navReducer';
import searchReducer from './searchReducer';
import bookReducer from './bookReducer';
import libraryReducer from './libraryReducer'
const rootReducer = combineReducers({
    nav : navReducer ,
    search : searchReducer,
    book : bookReducer,
    library: libraryReducer
});

export default rootReducer;


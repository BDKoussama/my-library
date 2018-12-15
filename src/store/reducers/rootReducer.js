import {combineReducers} from 'redux';
import navReducer from './navReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    nav : navReducer ,
    search : searchReducer 
});

export default rootReducer;


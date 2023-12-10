import { combineReducers } from 'redux'
import { reducer as loggedInReducer } from './loggedIn';
import { reducer as userReducer } from './user';

// use redux to handle logedIn state and Token
const rootReducer = combineReducers({
    loggedIn: loggedInReducer,
    user: userReducer
})

export { rootReducer };
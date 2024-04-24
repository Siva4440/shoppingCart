import {combineReducers} from 'redux';
import loginReducer from './loginSlice'
import registrationReducer from './registrationSlice'

const rootReducer = combineReducers({
    login:loginReducer,
    registration: registrationReducer

})
export default rootReducer;




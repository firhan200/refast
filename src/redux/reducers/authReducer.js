import { IS_AUTHENTICATED, LOGIN, LOGOUT } from '../actions/actionTypes';
import config from './../../config.js';

//set default value for authentication
let isAuth = false;
let userObj = {};

//method to get user token from local storage
// return true is user token exist in localStorage
// return false if isnt
const authenticatingFromLocalStorage = () => {
    let user = JSON.parse(localStorage.getItem(config.USER_KEY));
    if(user!==null){
        userObj = user;
        isAuth = true;
    }else{
        userObj = {};
        isAuth = false;
    }
}

//run method above
authenticatingFromLocalStorage();

//insert auth and user obj initial state
const initialState = {
    isAuthenticated : isAuth,
    user: userObj
}

export default (state = initialState, action) => {
    switch(action.type){
        case IS_AUTHENTICATED:
            return Object.assign(
                {},
                state,
                {
                    isAuthenticated: action.payload
                }
            )
        case LOGIN:
            return Object.assign(
                {},
                state,
                {
                    isAuthenticated: true,
                    user: action.payload
                }
            )
        case LOGOUT:
            return Object.assign(
                {},
                state,
                {
                    isAuthenticated: false,
                    user: {}
                }
            )
        default:
            return (state);
    }
}
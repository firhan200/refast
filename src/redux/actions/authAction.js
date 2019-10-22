import { IS_AUTHENTICATED, LOGIN, LOGOUT } from './actionTypes'
import config from './../../config.js';

/* Login method */
export const login = (content, callBack) => {
    // user signed up success
    // set user to local storage
    localStorage.setItem(config.USER_KEY, JSON.stringify(content));
    let user = localStorage.getItem(config.USER_KEY);

    //run callback
    callBack();

    //return
    return {
        type: LOGIN,
        payload: JSON.parse(user)
    }
}

/* Logout method */
export const logout = (callBack) => dispatch => {
    // Sign-out successful.
    // remove user from local storage
    localStorage.removeItem(config.USER_KEY);
    
    //dispatch store
    dispatch({
        type: LOGOUT
    });

    //execute callback
    callBack();
}

/* method to check if user already login or not */
export const isAuthenticated = () => {
    //set default value to false
    let isLocalStorageContainUser = false;

    //get user from localstorage
    let user = localStorage.getItem(config.USER_KEY);
    if(user!==null){
        //authenticated user
        isLocalStorageContainUser = true;
    }

    return {
        type: IS_AUTHENTICATED,
        payload : isLocalStorageContainUser
    }
}
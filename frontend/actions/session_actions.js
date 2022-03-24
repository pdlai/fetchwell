import { createUser, createSession, deleteSession } from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOG_OUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (currentUser) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        currentUser: currentUser,
    })
}

const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER,
    })
}

const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_SESSION_ERRORS,
        errors
    })
}

export const login = (user) => (dispatch) => {
    return createSession(user)
    .then( 
        (modUser) => { return dispatch(receiveCurrentUser(modUser)) },
        (err) => ( dispatch(receiveErrors(err.responseJSON)) )
    )
};

export const logout = () =>  (dispatch) => {
    return deleteSession()
    .then( 
        () => { return dispatch(logoutCurrentUser()) },
        (err) => ( dispatch(receiveErrors(err.responseJSON)) )
    )
};

export const signup = (user) => (dispatch) => {
    return createUser(user)
    .then( 
        (modUser) => { return dispatch(receiveCurrentUser(modUser)) },
        (err) => ( dispatch(receiveErrors(err.responseJSON)) )
    )
};
    
// export const signup = (user) => (dispatch) => createUser(user)
//     .then( (modUser) => dispatch(receiveCurrentUser(modUser)) );
    




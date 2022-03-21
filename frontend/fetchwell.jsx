// frontend/bench_bnb.jsx

import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

import { 
    signup,
    login
  } from "./actions/session_actions";
import {createUser, createSession, deleteSession} from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {

    const store = configureStore();

    // testing stuff
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.signup = signup;
    window.login = login;

    window.createUser = createUser;
    window.createSession = createSession;
    window.deleteSession = deleteSession;
    //end testing stuff

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
    
});
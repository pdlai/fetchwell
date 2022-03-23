import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/root_reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const configureStore = ( preloadedState = {} ) => {
    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;
    return createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(thunk, logger)));

    // use this to remove reactdev tools
    // return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
}

export default configureStore;
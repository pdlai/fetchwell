import {
    RECEIVE_PRODUCT
} from "../actions/product_actions";

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PRODUCT:
            return {};
            // return action.likes;
        default:
            return state;
    }
}

export default likesReducer;
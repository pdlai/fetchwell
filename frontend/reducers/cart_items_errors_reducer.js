import {
    RECEIVE_CART_ITEMS_ERRORS
} from '../actions/cart_actions';

const cartItemsErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_CART_ITEMS_ERRORS:
            return action.errors;
        default:
            return [];
    }
}

export default cartItemsErrorsReducer;
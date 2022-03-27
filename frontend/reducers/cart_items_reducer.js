import {
    RECEIVE_CART_ITEMS,
    RECEIVE_CART_ITEM,
    REMOVE_CART_ITEM
} from '../actions/cart_actions';

const cartItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CART_ITEMS:
            return action.cartItems;
        case RECEIVE_CART_ITEM:
            return Object.assign({}, state, { [action.cartItem.id]: action.cartItem })
        case REMOVE_CART_ITEM: 
            let nextState = Object.assign({}, state);
            delete nextState[action.cartItem.id]
            return nextState;
        default:
            return state;
    }
}

export default cartItemsReducer;
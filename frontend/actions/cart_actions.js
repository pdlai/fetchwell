import {
    indexCartItems,
    createCartItem,
    updateCartItem,
    destroyCartItem
} from "../util/cart_item_api_util";

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM =  "REMOVE_CART_ITEM";
export const RECEIVE_CART_ITEMS_ERRORS = "RECEIVE_CART_ITEMS_ERRORS";

const receiveCartItems = (cartItems) => {
    return ({
        type: RECEIVE_CART_ITEMS,
        cartItems
    })
}

const receiveCartItem = (cartItem) => {
    return ({
        type: RECEIVE_CART_ITEM,
        cartItem
    })
}

const deleteCartItem = (cartItem) => {
    return ({
        type: REMOVE_CART_ITEM,
        cartItem
    })
}

const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_CART_ITEMS_ERRORS,
        errors
    })
}


export const fetchCartItems = (userId) => (dispatch) => indexCartItems(userId)
    .then ( (cartItems) => dispatch(receiveCartItems(cartItems)) )

export const addCartItem = (cartItem) => (dispatch) => createCartItem(cartItem)
    .then ( 
        (cartItem) => dispatch(receiveCartItem(cartItem)),
        (err) => dispatch(receiveErrors(err.responseJSON))
    )

export const editCartItem = (cartItem) => (dispatch) => updateCartItem(cartItem)
    .then ( 
        (cartItem) => dispatch(receiveCartItem(cartItem)),
        (err) => dispatch(receiveErrors(err.responseJSON))
    )

export const removeCartItem = (id) => (dispatch) => destroyCartItem(id)
    .then ( 
        (cartItem) => dispatch(deleteCartItem(cartItem)),
        (err) => dispatch(receiveErrors(err.responseJSON))
    )
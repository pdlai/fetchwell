import {
    RECEIVE_PRODUCT
} from "../actions/product_actions";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PRODUCT:
            const nextState = {};
            if(!action.product.reviews) return nextState;
            action.product.reviews.forEach(review => {
                nextState[review.id] = review
            })
            return nextState;
        default:
            return state;
    }
}

export default reviewsReducer;
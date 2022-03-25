import {
    RECEIVE_REVIEW,
    RECEIVE_REVIEWS,
    RECEIVE_REVIEW_ERRORS
} from "../actions/review_actions";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            Object.assign({}, state, { [action.review.id]: action.review })
        default:
            return state;
    }
}

export default reviewsReducer;
import {
    RECEIVE_REVIEW_ERRORS,
    RECEIVE_REVIEW
} from "../actions/review_actions";

const reviewsErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_REVIEW_ERRORS:
            return action.errors;
        case RECEIVE_REVIEW:
            return [];
        default:
            return [];
    }
}

export default reviewsErrorsReducer;
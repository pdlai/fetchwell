import { createReview, indexReviews } from "../util/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

const receiveReviews = (reviews) => {
    return ({
        type: RECEIVE_REVIEWS,
        reviews
    })
}

const receiveReview = (review) => {
    return ({
        type: RECEIVE_REVIEW,
        review
    })
}

const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_REVIEW_ERRORS,
        errors
    })
}

export const fetchReviews = (productId) => (dispatch) => indexReviews(productId)
    .then ( (reviews) => dispatch(receiveReviews(reviews)) )

export const submitReview = (review) => (dispatch) => createReview(review)
    .then ( 
        (review) => dispatch(receiveReview(review)),
        (err) => ( dispatch(receiveErrors(err.responseJSON)) )
    )
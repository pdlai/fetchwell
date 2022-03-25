export const indexReviews = (productId) => {
    return $.ajax({
        method: "GET",
        url: "api/reviews",
        data: {productId: productId}
    })
}

export const createReview = (review) => {
    return $.ajax({
        method: "POST",
        url: "api/reviews",
        data: {review: review}
    })
}
export const indexCartItems = (userId) => {
    return $.ajax({
        method: "GET",
        url: "/api/cart_items",
        data: { userId: userId }
    })
}

export const createCartItem = (cartItem) => {
    return $.ajax({
        method: "POST",
        url: "/api/cart_items",
        data: { cartItem: cartItem }
    })
}

export const updateCartItem = (cartItem) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/cart_items/${cartItem.id}`,
        data: { cartItem: cartItem }
    })
}

export const destroyCartItem = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/cart_items/${id}`
    })
}
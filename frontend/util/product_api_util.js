export const indexProducts = (filters) => {
    return $.ajax({
        method: "GET",
        url: "/api/products",
        data: { filters: filters }
    })
}

export const showProduct = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/products/${id}`,
    })
}
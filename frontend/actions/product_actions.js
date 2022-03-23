import { indexProducts, showProduct } from "../util/product_api_util";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

const receiveProducts = (products) => {
    return ({
        type: RECEIVE_PRODUCTS,
        products
    })
}

const receiveProduct = (product) => {
    return ({
        type: RECEIVE_PRODUCT,
        product
    })
}

export const searchProducts = (filters) => (dispatch) => indexProducts(filters)
    .then ( (products) => dispatch(receiveProducts(products)) )

export const searchProduct = (id) => (dispatch) => showProduct(id)
    .then ( (product) => dispatch(receiveProduct(product)) )
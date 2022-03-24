import { searchProducts } from "./product_actions";

export const UPDATE_FILTER = "UPDATE_FILTER";

const changeFilters = (filters) => {
    return {
        type: UPDATE_FILTER,
        filters
    }
}

export const updateFilters = (filters) => (dispatch, getState) => {
    dispatch(changeFilters(filters));
    return searchProducts(getState().ui.filters)(dispatch);
}
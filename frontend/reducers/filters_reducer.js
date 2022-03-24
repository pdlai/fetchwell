import { UPDATE_FILTER } from "../actions/filter_actions";

const defaultFilters = Object.freeze({
    gender: "women",
})


const filtersReducer = (state=defaultFilters, action) => {
    Object.freeze(state);
    switch(action.type){
        case UPDATE_FILTER:
            return action.filters;
        default:
            return state;
    }
}

export default filtersReducer;
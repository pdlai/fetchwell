import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import productsReducer from "./products_reducer";
import reviewsReducer from "./reviews_reducer";
import likesReducer from "./likes_reducer";
import cartItemsReducer from "./cart_items_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productsReducer,
    reviews: reviewsReducer,
    likes: likesReducer,
    cartItems: cartItemsReducer
});

export default entitiesReducer;
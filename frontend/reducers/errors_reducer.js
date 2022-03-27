import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import reviewsErrorsReducer from "./reviews_errors_reducer";
import cartItemsErrorsReducer from "./cart_items_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    reviews: reviewsErrorsReducer,
    cartItems: cartItemsErrorsReducer
});

export default errorsReducer;
import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

import { 
    searchProducts,
    searchProduct
  } from "./actions/product_actions";
import {indexProducts, showProduct} from "./util/product_api_util"

document.addEventListener("DOMContentLoaded", () => {

    let store;

    if (window.currentUser) {
        const preloadedState = {
          entities: {
            users: { [window.currentUser.id]: window.currentUser }
          },
          session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
      } else {
        store = configureStore();
      }

    // testing stuff
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.searchProducts = searchProducts;
    window.searchProduct = searchProduct;
    //end testing stuff

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
    
});
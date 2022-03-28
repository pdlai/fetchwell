import React from "react";
import { Link } from "react-router-dom";

import ProductIndexContainer from "./products/product_index_container";
import ProductShowContainer from "./products/product_show_container";
import NavBarContainer from "./nav_bar/nav_bar_container"
import ReviewFormContainer from "./reviews/review_form_container"
// import CartItemsFormContainer from "./cart_items/cart_items_index_container"
import Modal from "./modal/modal";

import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Redirect, Switch, Route } from "react-router";


class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Modal />
                
                <NavBarContainer />

                <Switch>
                    <Route path="/womens/" component={ProductIndexContainer} />
                    <ProtectedRoute path='/products/:id/reviews/new' component={ReviewFormContainer} />
                    <Route path="/products/:id" component={ProductShowContainer} />
                    <Redirect to="/" />
                </Switch>

            </div>
        )
    }
}

export default App;


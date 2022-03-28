import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.renderCartItemsButton = this.renderCartItemsButton.bind(this);
    }

    componentDidMount(){
        if(this.props.currentUser) this.props.fetchCartItems(this.props.currentUser.id);
    }

    handleClick(filters){
        this.props.updateFilters(filters);
    }

    renderCartItemsButton(){
        if (this.props.currentUser){
            return(
                <button onClick={() => this.props.openModal('cart')}>Cart</button>
            )
        } else {
            return(
                <button onClick={() => this.props.openModal('login')}>Cart</button>
            )
        }
    }

    renderCartItemsCount(){
        let count = 0;
        this.props.cartItems.forEach(cartItem => {
            count += parseInt(cartItem.quantity);
        })
        if(!this.props.currentUser) count = 0;
        return(
            <div>items count: {count}</div>
        )
    }

    render(){
        return(
            <div className="nav-bar-container">
                <Link to="/">Womens</Link>
                <Link to="/">Mens</Link>

                <Link to="/" className="header-link">
                    <h1>Fetchwell</h1>
                </Link>
                <GreetingContainer />
                { this.renderCartItemsCount() }
                { this.renderCartItemsButton() }
                <div className="nav-bar">
                    <ul className="nav-links">
                        <li> <Link to="/womens/new" onClick={ () => this.handleClick({ gender: "womens", category: "new" })}>New</Link> </li>
                        <li> <Link to="/womens/clothing/jeans" onClick={ () => this.handleClick({ gender: "womens", category: "clothing", subcategory: "jeans" })}>Denim</Link> </li>
                        <li> <Link to="/womens/clothing" onClick={ () => this.handleClick({ gender: "womens", category: "clothing" })}>Clothing</Link> </li>
                        <li> <Link to="/womens/shoes" onClick={ () => this.handleClick({ gender: "womens", category: "shoes" })}>Shoes</Link> </li>
                        <li> <Link to="/womens/accessories" onClick={ () => this.handleClick({ gender: "womens", category: "accessories" })}>Accessories</Link> </li>
                        <li> <Link to="/womens/brands" onClick={ () => this.handleClick({ gender: "womens", category: "brands" })}>Labels We Love</Link> </li>
                        <li> <Link to="/womens/sale" onClick={ () => this.handleClick({ gender: "womens", category: "sale" })}>Sale</Link> </li>

                        <li> <Link to="/">Community</Link> </li>
                        <li> <Link to="/">Preloved</Link> </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(NavBar);
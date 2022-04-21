import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { IoIosSearch } from 'react-icons/io';
import { BsBagFill, BsBag } from 'react-icons/bs';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.renderCartItemsButton = this.renderCartItemsButton.bind(this);
        this.countItems = this.countItems.bind(this);
    }

    componentDidMount(){
        if(this.props.currentUser) this.props.fetchCartItems(this.props.currentUser.id);
    }

    handleClick(filters){
        this.props.updateFilters(filters);
    }

    renderCartItemsButton(){
        let count = this.countItems();
        if (this.props.currentUser){
            return(
                <button className="nav-item-count" onClick={() => this.props.openModal('cart')}>
                    { count >= 1 ? < BsBagFill size='22px' /> : < BsBag size='22px' /> }
                    <div>{count}</div>
                </button>
            )
        } else {
            return(
                <button className="nav-item-count" onClick={() => this.props.openModal('login')}>
                    { count >= 1 ? < BsBagFill size='22px' /> : < BsBag size='22px' /> }
                    <div>{count}</div>
                </button>
            )
        }
    }

    countItems(){
        let count = 0;
        this.props.cartItems.forEach(cartItem => {
            count += parseInt(cartItem.quantity);
        })
        if(!this.props.currentUser) count = 0;
        return count;
    }

    render(){
        return(
            <div className="nav-bar-wrapper">
                <div className="nav-bar-container">
                    {/* <Link to="/">Womens</Link>
                    <Link to="/">Mens</Link> */}

                    <div className="nav-bar-banner">
                        <p>Guess What? So Many New Arrivals Just Landed On The Site.&nbsp;
                            <Link className="nav-link" to="/womens/clothing" onClick={ () => this.handleClick({ gender: "womens", category: "clothing" })}>Start Shopping Now.</Link>
                        </p>
                    </div>
                    <div className="nav-bar">
                        <Link to="/" className="header-link">
                            <img src='./fetchwell-logo-bold.png' alt="fetchwell logo" />
                        </Link>
                        <ul className="nav-links">
                            <li> <Link className="nav-link" to="/womens/new" onClick={ () => this.handleClick({ gender: "womens", category: "new" })}>New</Link> </li>
                            <li> <Link className="nav-link" to="/womens/clothing/jeans" onClick={ () => this.handleClick({ gender: "womens", category: "clothing", subcategory: "jeans" })}>Denim</Link> </li>
                            <li> <Link className="nav-link" to="/womens/clothing" onClick={ () => this.handleClick({ gender: "womens", category: "clothing" })}>Clothing</Link> </li>
                            <li> <Link className="nav-link" to="/womens/shoes" onClick={ () => this.handleClick({ gender: "womens", category: "shoes" })}>Shoes</Link> </li>
                            <li> <Link className="nav-link" to="/womens/accessories" onClick={ () => this.handleClick({ gender: "womens", category: "accessories" })}>Accessories</Link> </li>
                            <li> <Link className="nav-link" to="/womens/brands" onClick={ () => this.handleClick({ gender: "womens", category: "brands" })}>Labels We Love</Link> </li>
                            <li> <Link className="nav-link" to="/womens/sale" onClick={ () => this.handleClick({ gender: "womens", category: "sale" })}>Sale</Link> </li>

                            <li> <Link className="nav-link" to="/">Community</Link> </li>
                            <li> <Link className="nav-link" to="/">Preloved</Link> </li>
                        </ul>
                        <div className="icon-links">
                            <IoIosSearch size='28px' />
                            <GreetingContainer />
                            { this.renderCartItemsButton() }
                        </div>
                    </div>
                </div>
                <div id="nav-bar-spacer">&nbsp;</div>
            </div>
        )
    }
}

export default withRouter(NavBar);
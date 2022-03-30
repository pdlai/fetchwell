import React from 'react';
import CartItemsIndexItem from './cart_items_index_item';
import { withRouter } from 'react-router-dom';

class CartItemsIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchCartItems(this.props.currentUser.id)
    }

    render(){
        if(!this.props.cartItems.length) return (<div>Your cart is empty.</div>)
        return(
            <div>
                <div onClick={this.props.closeModal} className="close-button">Close</div>
                <div>Your Bag</div>
                <ul className="cart-items-index-list">
                    {
                        this.props.cartItems.map(cartItem => (
                            <CartItemsIndexItem
                                cartItem={cartItem}
                                key={cartItem.id} 
                                editCartItem={this.props.editCartItem}
                                removeCartItem={this.props.removeCartItem} />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default withRouter(CartItemsIndex);
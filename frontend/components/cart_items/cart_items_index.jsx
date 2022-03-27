import React from 'react';
import CartItemsIndexItem from './cart_items_index_item';

class CartItemsIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchCartItems(this.props.currentUser.id)
    }

    render(){
        if(!this.props.cartItems) return null;
        return(
            <div>
                <ul className="cart-items-index-list">
                    {
                        this.props.cartItems.map(cartItem => (
                            <CartItemsIndexItem
                                cartItem={cartItem}
                                key={cartItem.id} />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default CartItemsIndex;
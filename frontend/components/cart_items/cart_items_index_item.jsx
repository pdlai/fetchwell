import React from 'react';

class CartItemsIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <li>
                <div>{ this.props.cartItem.quantity }</div>
                <div>{ this.props.cartItem.size }</div>

                <div>{ this.props.cartItem.product.category }</div>
            </li>
        )
    }
}

export default CartItemsIndexItem;
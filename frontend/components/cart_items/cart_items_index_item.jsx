import React from 'react';

class CartItemsIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    changeQuantity(type){
        let quantity = this.props.cartItem.quantity;
        switch(type){
            case 'increase':
                this.props.editCartItem( Object.assign({}, this.props.cartItem, { quantity: quantity + 1}) )
                return;
            case 'decrease':
                if (quantity === 1) return;
                this.props.editCartItem( Object.assign({}, this.props.cartItem, { quantity: quantity - 1 }) )
                return;
        }
    }

    render(){
        return(
            <li className='cart-items-index-item'>
                <div id='cart-item-remove-x' onClick={() => this.props.removeCartItem(this.props.cartItem.id)}>X</div>
                <img src={ this.props.cartItem.product.photoUrls[1] } />
                <div>{ this.props.cartItem.product.name }</div>
                <div>Size: { this.props.cartItem.size }</div>

                <button onClick={() => this.changeQuantity('decrease')}>-</button>
                <div>Qty: { this.props.cartItem.quantity }</div>
                <button onClick={() => this.changeQuantity('increase')}>+</button>

                <div>${ this.props.cartItem.product.price }</div>
            </li>
        )
    }
}

export default CartItemsIndexItem;
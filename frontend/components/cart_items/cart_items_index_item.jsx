import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

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
                <img src={ this.props.cartItem.product.photoUrls[0] } width='80px' height='100px' />
                <div className='cart-item-price'>${ this.props.cartItem.product.price.toFixed(2) }</div>
                <div className='cart-item-details'>
                    <div className='cart-item-name'>{ this.props.cartItem.product.name }</div>
                    <div className='cart-item-size'>Size: { this.props.cartItem.size }</div>
                    <div className='cart-item-quantity'>Qty:
                        &nbsp;<AiOutlineMinus onClick={() => this.changeQuantity('decrease')} size='14px' />&nbsp;
                        { this.props.cartItem.quantity }
                        &nbsp;<AiOutlinePlus onClick={() => this.changeQuantity('increase')} size='14px' />&nbsp;
                    </div>
                </div>
            </li>
        )
    }
}

export default CartItemsIndexItem;
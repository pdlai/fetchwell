import React from 'react';
import CartItemsIndexItem from './cart_items_index_item';
import { withRouter } from 'react-router-dom';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

class CartItemsIndex extends React.Component {
    constructor(props){
        super(props);
        this.handlePromoSubmit = this.handlePromoSubmit.bind(this)
        this.state = {
            dropDown: false,
            promoApplied: false,
            promoCode: ""
        }
    }

    componentDidMount(){
        this.props.fetchCartItems(this.props.currentUser.id)
    }

    handlePromoSubmit(){
        this.setState({ promoApplied: true, promoCodeApplied: this.state.promoCode })
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    dropDownMenu(){
        if (this.state.dropDown){
            return (
                <div className='dropdown-menu'>
                    <input type="text" value={this.state.promoCode} onChange={this.update('promoCode')}/>
                    <button onClick={this.handlePromoSubmit}>Apply</button>
                </div>
            )
        } else {
            return <div></div>;
        }
    }

    dropDownIcon(){
        if (this.state.dropDown){
            return (
                <div className='promo-dropdown' onClick={() => this.setState({dropDown: false}) }>
                    <div>Add Promo Code</div>
                    <BsChevronUp />
                </div>
            )
        } else {
            return (
                <div className='promo-dropdown' onClick={() => this.setState({dropDown: true}) }>
                    <div>Add Promo Code</div>
                    <BsChevronDown />
                </div>
            )
        }
    }

    promoSubmitMessage(){
        if (!this.state.dropDown) return;
        if (this.state.promoApplied){
            if (this.state.promoCodeApplied){
                return <div><div id='promo-message-success'>Promo code<div>&nbsp;"{this.state.promoCodeApplied}"&nbsp;</div>has been applied. </div></div>
            } else {
                return <div><div id='promo-message-error'>Please enter a promo code.</div></div>
            }
        }
    }

    totalCost(){
        let totalCost = 0;
        this.props.cartItems.forEach(cartItem => {
            totalCost += cartItem.product.price * cartItem.quantity;
        });
        return totalCost.toFixed(2);
    }

    render(){
        let emptyDescription;
        if(!this.props.cartItems.length){
            emptyDescription = <div>Your Cart is empty.</div>
        } else {
            emptyDescription = <div></div>
        }
        return(
            <div className="cart-container">
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <div className='cart-title'>Your Bag</div>
                <div className='cart-items-index-list-container'>
                    {emptyDescription}
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
                <div className='promo-code-container'>
                    {this.dropDownIcon()}
                    {this.dropDownMenu()}
                    {this.promoSubmitMessage()}
                </div>
                <div className='cart-checkout'>
                    <div className='subtotal'>
                        <div>Order Subtotal:</div>
                        <div>${this.totalCost()}</div>
                    </div>
                    <button>Continue to Checkout</button>
                </div>
            </div>
        )
    }
}

export default withRouter(CartItemsIndex);
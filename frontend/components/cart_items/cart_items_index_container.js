import { connect } from 'react-redux';
import CartItemsIndex from './cart_items_index';
import { closeModal } from '../../actions/modal_actions';
import {
    fetchCartItems,
    editCartItem,
    removeCartItem
} from '../../actions/cart_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        cartItems: Object.values(state.entities.cartItems),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCartItems: (userId) => dispatch(fetchCartItems(userId)),
        editCartItem: (cartItem) => dispatch(editCartItem(cartItem)),
        removeCartItem: (id) => dispatch(removeCartItem(id)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItemsIndex);
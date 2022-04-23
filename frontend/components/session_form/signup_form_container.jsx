import { connect } from "react-redux";
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { fetchCartItems } from "../../actions/cart_actions";

const mapStateToProps = ( state ) => {
    return {
        errors: state.errors.session,
        formType: 'Join Now',
        currentUser: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Sign In
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        fetchCartItems: (userId) => dispatch(fetchCartItems(userId)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);
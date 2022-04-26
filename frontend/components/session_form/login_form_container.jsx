import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { login } from "../../actions/session_actions";
import SessionForm from './session_form';
import { fetchCartItems } from '../../actions/cart_actions';

const mapStateToProps = ( state ) => {
    return {
        errors: state.errors.session,
        formType: 'Sign In',
        currentUser: state.entities.users[state.session.id],
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Sign&nbsp;Up
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        fetchCartItems: (userId) => dispatch(fetchCartItems(userId)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);
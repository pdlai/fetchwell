import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { login } from "../../actions/session_actions";
import SessionForm from './session_form';

const mapStateToProps = ( state ) => {
    return {
        errors: state.errors.session,
        formType: 'Login',
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);
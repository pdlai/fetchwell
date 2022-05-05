import { connect } from 'react-redux';
import { updateFilters } from '../../actions/filter_actions';
import Splash from './splash';
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFilters: (filters) => dispatch(updateFilters(filters)),
        openModal: modal => dispatch(openModal(modal)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
import { connect } from "react-redux";
import { updateFilters } from "../../actions/filter_actions";
import NavBar from "./nav_bar";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
    return {
        filters: state.ui.filters,
        currentUser: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFilters: (filters) => dispatch(updateFilters(filters)),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
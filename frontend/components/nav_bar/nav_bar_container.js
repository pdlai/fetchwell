import { connect } from "react-redux";
import { updateFilters } from "../../actions/filter_actions";
import NavBar from "./nav_bar";

const mapStateToProps = (state) => {
    return {
        filters: state.ui.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFilters: (filters) => dispatch(updateFilters(filters))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
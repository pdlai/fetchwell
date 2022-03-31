import { connect } from 'react-redux';
import { updateFilters } from '../../actions/filter_actions';
import Splash from './splash';

const mapDispatchToProps = (dispatch) => {
    return {
        updateFilters: (filters) => dispatch(updateFilters(filters)),
    }
}

export default connect(null, mapDispatchToProps)(Splash);
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { submitReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.reviews,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitReview: (review) => dispatch(submitReview(review)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
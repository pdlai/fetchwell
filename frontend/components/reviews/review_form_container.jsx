import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { submitReview } from '../../actions/review_actions';
import { searchProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.entities.products[ownProps.match.params.id],
        errors: state.errors.reviews,
        currentUser: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitReview: (review) => dispatch(submitReview(review)),
        searchProduct: (id) => dispatch(searchProduct(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
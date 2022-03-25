import { connect } from 'react-redux';
import ProductShow from './product_show';
import { searchProduct } from '../../actions/product_actions';
import { fetchReviews } from '../../actions/review_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.entities.products[ownProps.match.params.id],
        reviews: Object.values(state.entities.reviews),
        currentUser: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchProduct: (id) => dispatch(searchProduct(id)),
        fetchReviews: (productId) => dispatch(fetchReviews(productId)),
        openModal: modal => dispatch(openModal(modal)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
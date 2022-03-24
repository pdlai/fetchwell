import { connect } from 'react-redux';
import ProductShow from './product_show';
import { searchProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.entities.products[ownProps.match.params.id],
        reviews: Object.values(state.entities.reviews),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchProduct: (id) => dispatch(searchProduct(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
import { connect } from 'react-redux';
import { 
        searchProducts, 
        searchProduct 
    } from '../../actions/product_actions';
import ProductIndex from './product_index';

const mapStateToProps = (state) => {
    return {
        products: Object.values(state.entities.products)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchProducts: (filters) => dispatch(searchProducts(filters)),
        searchProduct: (id) => dispatch(searchProduct(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);

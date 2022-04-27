import React from 'react';
import { Link } from 'react-router-dom';

class ProductIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <li className='product-index-item'>
                <Link to={`/products/${this.props.product.id}`}>
                    <img src={ this.props.product.photoUrls[1] } />
                    <div>{ this.props.product.name }</div>
                    <div>{ this.props.product.price }</div>
                </Link>
            </li>
        )
    }

}

export default ProductIndexItem;
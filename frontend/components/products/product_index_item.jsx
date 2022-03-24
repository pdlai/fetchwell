import React from 'react';
import { Link } from 'react-router-dom';

class ProductIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        // using name for link until get images working
        return (
            <li>
                <Link to={`/products/${this.props.product.id}`}>{ this.props.product.name }</Link>
                <div>{ this.props.product.price }</div>
                <div>{ this.props.product.image_url }</div>
            </li>
        )
    }

}

export default ProductIndexItem;
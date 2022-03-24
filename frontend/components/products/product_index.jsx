import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
    constructor(props){
        super(props);
    }

    // componentDidMount(){
    //     this.props.searchProducts();
    // }

    render(){
        return(
            <div>
                <ul>
                    {
                        this.props.products.map(product => (
                            <ProductIndexItem
                                product={product}
                                key={product.id} />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default ProductIndex;
import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.path = this.props.location.pathname;
        let queries = this.path.split("/");
        if( queries[1] === 'womens' || queries[1] === 'mens'){
            this.props.updateFilters({
                gender: queries[1],
                category: queries[2],
                subcategory: queries[3]
            })
        }
    }

    render(){
        return(
            <div>
                <ul className="product-index-list">
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
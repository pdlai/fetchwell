import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.path = this.props.location.pathname;
        let queries = this.path.split("/");
        if( queries[1] === 'womens'){
            this.props.updateFilters({
                gender: queries[1],
                category: queries[2],
            })
        }
    }

    render(){
        return(
            <div className='product-index-container'>
                <div className='refinement-bar'>
                    <ul className='refinement-category'>
                        <li>stuf</li>
                        <li>stuf</li>
                    </ul>
                    <ul>a</ul>
                    <ul>bunch</ul>
                    <ul>of</ul>
                    <ul>other</ul>
                    <ul>stuff</ul>
                    <ul>here</ul>
                </div>
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
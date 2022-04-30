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

    productHeader(){
        if (this.props.products.length > 0){
            let title;
            switch(this.props.products[0].category){
                case 'new':
                    title = 'New Arrivals';
                    break;
                case 'denim':
                    title = 'The Denim Bar';
                    break;
                case 'clothing':
                    title = 'Clothing';
                    break;
                case 'shoes':
                    title = 'Shoes';
                    break;
                case 'accessories':
                    title = 'Accessories';
                    break;
                case 'brands':
                    title = 'Labels We Love';
                    break;
                default:
                    title = 'No products in category found.'
            }
            return <div className='product-index-title'>{title}</div>
        }
    }

    render(){
        return(
            <div className='product-index-container'>
                {this.productHeader()}
                <div className='product-index'>
                    <div className='refinement-bar-container'>
                        <div className='refinement-bar'>
                            <ul className='refinement-category'>Category
                                <li>New</li>
                                <li>Denim</li>
                                <li>Clothing</li>
                                <li>Shoes</li>
                                <li>Accessories</li>
                                <li>Brands</li>
                            </ul>
                            <ul>bunch</ul>
                            <ul>of</ul>
                            <ul>other</ul>
                            <ul>categories</ul>
                            <ul>here</ul>
                        </div>
                    </div>
                    <div className='product-index-list-container'>
                        <div className='product-index-count'>{this.props.products.length}&nbsp;Results</div>
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
                </div>
            </div>
        )
    }
}

export default ProductIndex;
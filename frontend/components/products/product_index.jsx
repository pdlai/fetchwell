import React from 'react';
import ProductIndexItem from './product_index_item';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

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

    handleClick(filters){
        this.props.updateFilters(filters);
    }

    refinementCategory(){
        if (this.props.products.length > 0){
            let category = {};
            category[this.props.products[0].category] = true;
            return (
                <ul className='refinement-category'><div><div>Category</div><AiOutlineMinus /></div>
                    <li className={ category['new'] ? 'refinement-category-selected' : '' }> <Link to="/womens/new" onClick={ () => this.handleClick({ gender: "womens", category: "new" })}>New</Link> </li>
                    <li className={ category['denim'] ? 'refinement-category-selected' : '' }> <Link to="/womens/denim" onClick={ () => this.handleClick({ gender: "womens", category: "denim" })}>Denim</Link> </li>
                    <li className={ category['clothing'] ? 'refinement-category-selected' : '' }> <Link to="/womens/clothing" onClick={ () => this.handleClick({ gender: "womens", category: "clothing" })}>Clothing</Link> </li>
                    <li className={ category['shoes'] ? 'refinement-category-selected' : '' }> <Link to="/womens/shoes" onClick={ () => this.handleClick({ gender: "womens", category: "shoes" })}>Shoes</Link> </li>
                    <li className={ category['accessories'] ? 'refinement-category-selected' : '' }> <Link to="/womens/accessories" onClick={ () => this.handleClick({ gender: "womens", category: "accessories" })}>Accessories</Link> </li>
                    <li className={ category['brands'] ? 'refinement-category-selected' : '' }> <Link to="/womens/brands" onClick={ () => this.handleClick({ gender: "womens", category: "brands" })}>Labels We Love</Link> </li>
                    <li>Many</li>
                    <li>Other</li>
                    <li>Things</li>
                    <li>Here</li>
                    <li>To</li>
                    <li>Fill</li>
                    <li>Up</li>
                    <li>Space</li>
                    <li>Looks</li>
                    <li>Better</li>
                </ul>
            )
        }
    }

    render(){
        window.scrollTo(0,0);
        return(
            <div className='product-index-container'>
                {this.productHeader()}
                <div className='product-index'>
                    <div className='refinement-bar-container'>
                        <div className='refinement-bar'>
                            {this.refinementCategory()}
                            <ul><div>bunch</div><AiOutlinePlus /></ul>
                            <ul><div>of</div><AiOutlinePlus /></ul>
                            <ul><div>stuff</div><AiOutlinePlus /></ul>
                            <ul><div>here</div><AiOutlinePlus /></ul>
                            <ul><a className="nav-link" href='https://github.com/pdlai' target='_blank'>Github</a><AiOutlinePlus /></ul>
                            <ul><a className="nav-link" href='https://angel.co/u/phillip-lai-1' target='_blank'>AngelList</a><AiOutlinePlus /></ul>
                            <ul><a className="nav-link" href='https://www.linkedin.com/in/philliplai/' target='_blank'>Linkedin</a><AiOutlinePlus /></ul>
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
                        <div className='product-index-count'>{this.props.products.length}&nbsp;Results</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductIndex;
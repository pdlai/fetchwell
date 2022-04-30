import React from 'react';
import { Link } from 'react-router-dom';

class ProductIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hover: false
        }
    }

    hoverDisplay(){
        if (this.state.hover){
            return (
                <div className='product-index-item-menu'>
                    <Link to={`/products/${this.props.product.id}`}>
                        <img src={ this.props.product.photoUrls[1] } />
                    </Link>
                    <div className='product-index-item-button'>
                        <Link to={`/products/${this.props.product.id}`}>
                            <button>Shop Now</button>
                        </Link>
                    </div>
                    <div className='product-index-item-details hidden'>
                        <div>{ this.props.product.name }</div>
                        <div>${ this.props.product.price }</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='product-index-item-menu'>
                    <Link to={`/products/${this.props.product.id}`}>
                        <img src={ this.props.product.photoUrls[0] } />
                    </Link>
                    <div className='product-index-item-button hidden'>
                        <Link to={`/products/${this.props.product.id}`}>
                            <button>Shop Now</button>
                        </Link>
                    </div>
                    <div className='product-index-item-details'>
                        <div>{ this.props.product.name }</div>
                        <div>${ this.props.product.price }</div>
                    </div>
                </div>
            )
        }
    }

    render(){
        return (
            <li className='product-index-item' onMouseEnter={() => this.setState({ hover: true })} onMouseLeave={() => this.setState({ hover: false })}>
                {this.hoverDisplay()}
                {/* render the on-hover image so theres no rerender when actually hovering */}
                <img src={ this.props.product.photoUrls[1] } className='hidden-image' />
            </li>
        )
    }

}

export default ProductIndexItem;
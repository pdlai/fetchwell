import React from 'react';
import ReviewItem from '../reviews/review_item';
import { Link } from "react-router-dom";

class ProductShow extends React.Component {
    constructor(props){
        super(props);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.state = {
            size: "",
            quantity: 1
        }
    }

    componentDidMount(){
        this.props.searchProduct(this.props.match.params.id);
        this.props.fetchReviews(this.props.match.params.id);
    }

    renderCreateReview(){
        if (this.props.currentUser){
            return(
                <Link to={`${this.props.location.pathname}/reviews/new`}>
                    <button>Create Review</button>
                </Link>
            )
        } else {
            return(
                <button onClick={() => this.props.openModal('login')}>Create Review</button>
            )
        }
    }

    handleAddToCart(){
        if (!this.props.currentUser){
            this.props.openModal('login');
        } else {
            const product = this.props.product;
            const cartItems = this.props.cartItems;
            for (let cartItem of cartItems){
                if (cartItem.product_id === product.id && cartItem.size === this.state.size){
                    const newQuantity = cartItem.quantity + 1;
                    this.props.editCartItem( Object.assign({}, cartItem, { quantity: newQuantity, user_id: this.props.currentUser.id}) )
                        .then(
                            () => this.props.openModal('cart'),
                            () => this.setState({ errors: this.props.errors })
                        );
                    return;
                }
            }
            this.props.addCartItem( Object.assign({}, this.state, { product_id: this.props.product.id, user_id: this.props.currentUser.id}) )
                .then(
                    () => this.props.openModal('cart'),
                    () => this.setState({ errors: this.props.errors })
                );
        }
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    renderErrors(){
        if(!this.state.errors) return;
        return(
            <ul className='review-form-error-list'>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render(){
        if(!this.props.product) return null;

        let product = this.props.product;
        let reviews = this.props.reviews;
        return(
            <div>
                <div className="product-show-item">
                    <div>{ product.name }</div>
                    <div>{ product.price }</div>
                    <div>{ product.description }</div>
                    <img src={ product.photoUrls[0] } />
                    <img src={ product.photoUrls[1] } />
                    <img src={ product.photoUrls[1] } className="reversed" />
                </div>

                {this.renderErrors()}

                <div>
                    <label>XX Small
                        <input onClick={this.update("size")} type="radio" name="size" value="XXS" />
                    </label>
                    <label>X Small
                        <input onClick={this.update("size")} type="radio" name="size" value="XS" />
                    </label>
                    <label>Small
                        <input onClick={this.update("size")} type="radio" name="size" value="S" />
                    </label>
                    <label>Medium
                        <input onClick={this.update("size")} type="radio" name="size" value="M" />
                    </label>
                    <label>Large
                        <input onClick={this.update("size")} type="radio" name="size" value="L" />
                    </label>
                    <label>X Large
                        <input onClick={this.update("size")} type="radio" name="size" value="XL" />
                    </label>
                </div>
                
                <button onClick={ this.handleAddToCart }>Add to Cart</button>
                {this.renderCreateReview()}
                <ul className="product-show-reviews">
                    {
                        reviews.map(review => (
                            <ReviewItem
                                review={review}
                                key={review.id} />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default ProductShow;
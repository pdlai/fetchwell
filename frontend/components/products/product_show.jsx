import React from 'react';
import ReviewItem from '../reviews/review_item';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import { IoStar, IoStarOutline } from 'react-icons/io5';
import { CgRuler } from 'react-icons/cg';

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

    renderStars(){
        let sum = 0;
        this.props.reviews.forEach(review => {
            sum += review.rating;
        });
        this.avgRating = Math.round(sum / this.props.reviews.length);
        return (
            <div className='product-show-item-rating-stars'>
                {[...Array(5)].map((foo, idx) => {
                    return (
                        <div>
                            { idx < this.avgRating ? < IoStar size='14px' /> : < IoStarOutline size='14px' /> }
                        </div>
                    )
                })}
            </div>
        )
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
        let date = new Date();
        let today = date.toDateString().split(" ");
        let product = this.props.product;
        let reviews = this.props.reviews;
        return(
            <div className='product-show-container'>
                <div className='product-show-category'><div>Womens</div>< AiOutlineRight /><div>{product.category}</div></div>
                <div className='product-show-item'>
                    <div className='product-show-item-images'>
                        <img src={ product.photoUrls[0] } />
                        <img src={ product.photoUrls[1] } />
                        <img src={ product.photoUrls[0] } className="reversed-image" />
                    </div>
                    <div className='product-show-item-details'>
                        <div className='product-show-item-rating'>
                            {this.renderStars()}
                            <div>{reviews.length}&nbsp;Reviews&nbsp;&nbsp;<div id='bracket-break'>|</div>&nbsp;&nbsp;ND955</div>
                        </div>
                        <div className='product-show-item-name'>{ product.name }</div>
                        <div className='product-show-item-price'>
                            <div>${ product.price.toFixed(2) }</div>
                            <div>or 4 installments of ${ (product.price/4).toFixed(2) } by&nbsp;<img src='./afterpay_logo.svg' width='80px'/></div>
                        </div>
                        {this.renderErrors()}
                        <div className='product-show-item-size'>
                            <div className='product-show-item-size-header'>
                                <div className='item-size-selected'>
                                    <div>Size</div>
                                    <div>{this.state.size}</div>
                                </div>
                                <div className='item-size-chart'>
                                    < CgRuler  size='22px'/>
                                    <div>Size&nbsp;Chart</div>
                                </div>
                            </div>
                            <div className='product-show-item-size-selector'>
                                <input id='radio-size-XXS'onClick={this.update("size")} type="radio" name="size" value="XXS" />
                                <label for='radio-size-XXS'>XX&nbsp;Small</label>
                            
                                <input id='radio-size-XS'onClick={this.update("size")} type="radio" name="size" value="XS" />
                                <label for='radio-size-XS'>X&nbsp;Small</label>
                            
                                <input id='radio-size-S'onClick={this.update("size")} type="radio" name="size" value="S" />
                                <label for='radio-size-S'>Small</label>
                            
                                <input id='radio-size-M'onClick={this.update("size")} type="radio" name="size" value="M" />
                                <label for='radio-size-M'>Medium</label>
                            
                                <input id='radio-size-L'onClick={this.update("size")} type="radio" name="size" value="L" />
                                <label for='radio-size-L'>Large</label>
                            
                                <input id='radio-size-XL'onClick={this.update("size")} type="radio" name="size" value="XL" />
                                <label for='radio-size-XL'>X&nbsp;Large</label>
                            </div>
                        </div>
                        <div className='product-show-item-delivery'>
                            <label className='delivery-shipping'>
                                <input type="radio" name="delivery" checked/>
                                <div className='delivery-shipping-info'>
                                    <div className='delivery-shipping-zipcode'>
                                            <div>Delivery</div>
                                            <div>&nbsp;to&nbsp;</div>
                                            <div>90045</div>
                                    </div>
                                    <div className='delivery-shipping-details'>
                                        <div>FREE standard shipping & returns for Insiders</div>
                                        <div>Order by 9PM PDT to get it by {today[0]}, {today[1]} {today[2]}</div>
                                    </div>
                                </div>
                            </label>
                            <label className='delivery-store'>
                                <input type="radio" name="delivery" />
                                In-Store Availability & Pick Up
                            </label>
                        </div>
                        
                        <button id='add-to-cart-button' onClick={ this.handleAddToCart }>Add to Bag</button>
                        <div>{ product.description }</div>
                    </div>
                </div>

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
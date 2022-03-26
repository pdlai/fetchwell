import React from 'react';
import ReviewItem from '../reviews/review_item';
import { Link } from "react-router-dom";

class ProductShow extends React.Component {
    constructor(props){
        super(props);
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
                    <div>{ product.image_url }</div>
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
import React from 'react';
import { IoStar, IoStarOutline } from 'react-icons/io5';

class ReviewItem extends React.Component {
    constructor(props){
        super(props);
    }

    renderStars(){
        return (
            <div className='review-item-rating-stars'>
                {[...Array(5)].map((foo, idx) => {
                    return (
                        <div key={idx}>
                            { idx < this.props.review.rating ? < IoStar size='14px' /> : < IoStarOutline size='14px' /> }
                        </div>
                    )
                })}
            </div>
        )
    }

    render(){
        let review = this.props.review;
        return(
            <li className='product-show-review-item'>
                <div className='review-item-user-info'>
                    <div className='user-info-subtitle'>{ review.nickname }</div>
                    <div className='user-info-location'>{ review.location }</div>
                    <div className='user-info-subtitle'>Overall Fit:</div>
                    <input type='range' min='1' max='100' value={review.overall_fit} disabled />
                    <div className='review-item-fit-names'>
                        <div>Small</div>
                        <div>True to Size</div>
                        <div>Big</div>
                    </div>
                </div>
                <div className='review-item-user-review'>
                    {this.renderStars()}
                    <div className='review-item-summary'>{ review.summary }</div>
                    <div>{ review.date }</div>
                    <br />
                    <div>{ review.description }</div>
                </div>
            </li>
        )
    }
}

export default ReviewItem;
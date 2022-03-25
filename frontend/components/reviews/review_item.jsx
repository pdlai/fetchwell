import React from 'react';

class ReviewItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let review = this.props.review;
        return(
            <div>
                <div>{ review.author }</div>
                <div>{ review.location }</div>
                <div>{ review.overall_fit }</div>
                <div>{ review.rating }</div>
                <div>{ review.summary }</div>
                <div>{ review.created_at }</div>
                <div>{ review.description }</div>
            </div>
        )
    }
}

export default ReviewItem;
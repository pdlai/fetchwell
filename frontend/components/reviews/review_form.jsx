import React from 'react';
import { Link } from 'react-router-dom';
import { IoStar, IoStarOutline } from 'react-icons/io5';

class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            product_id: this.props.match.params.id,
            author_id: this.props.currentUser.id,
            nickname: "",
            location: "",
            recommend: "",
            summary: "",
            description: "",
            rating: "",
            overall_fit: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.filterErrors = this.filterErrors.bind(this);
    }

    componentDidMount(){
        this.props.searchProduct(this.props.match.params.id);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        const review = Object.assign({}, this.state);
        this.props.submitReview(review).then( 
            () => {
                this.props.history.replace(`/products/${this.props.match.params.id}`);
            },
            () => {
                this.setState({ errors: this.props.errors })
            }
        )
    }
    
    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    renderErrors(){
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

    filterErrors(){
        let keys = ['Location', 'Overall', 'Rating', 'Summary', 'Description', 'Nickname'];
        let errors = {};
        if(this.state.errors){
            keys.forEach( key => {
                this.state.errors.forEach(error=>{
                    if(error.split(" ")[0] === key){
                        errors[key] = true;
                    }
                })
            })
        }
        return errors;
    }

    renderRatingLengend(){
        let ratingLegend;
        if(this.state.hover === 0){
            ratingLegend = parseInt(this.state.rating);
        } else {
            ratingLegend = parseInt(this.state.hover);
        }
        switch(ratingLegend){
            case 1:
                return 'Poor';
            case 2:
                return 'Fair';
            case 3:
                return 'Average';
            case 4:
                return 'Good';
            case 5:
                return 'Excellent';
        }
    }

    render(){
        let productName;
        if( this.props.product ) productName = this.props.product.name;

        let errors = this.filterErrors();

        return(
            <div>
                <div>Write Your Review</div>
                <div>{ productName }</div>

                {this.renderErrors()}

                <form className="review-form" onSubmit={this.handleSubmit}>

                    <div className="review-form-section">
                        Your Product Rating
                        <div className="review-form-subsection">
                            <div>
                                <div className={(errors['Rating'] ? 'review-form-error-title' : '')}>Overall Rating</div>
                                <div>
                                    {
                                        [...Array(5)].map((foo, idx) => {
                                            const ratingValue = idx + 1
                                            return (
                                                <label key={idx}>
                                                    <input
                                                        type="radio"
                                                        name="rating"
                                                        value={ratingValue}
                                                        onClick={this.update('rating')}
                                                    />
                                                    {ratingValue <= (this.state.hover || this.state.rating) ?
                                                        <IoStar className='star' onMouseEnter={() => this.setState({ hover: ratingValue })} onMouseLeave={() =>this.setState({ hover: 0 })} />
                                                        : <IoStarOutline className='star' onMouseEnter={() => this.setState({ hover: ratingValue })} onMouseLeave={() => this.setState({ hover: 0 })} />}
                                                </label>
                                            );
                                        })
                                    }
                                    { this.renderRatingLengend() }
                                </div>
                            </div>    
                            <div>
                                <div className={errors['Overall'] ? 'review-form-error-title' : ''}>Overall Fit</div>
                                <div>
                                    <label>Runs Small
                                        <input type="radio" name="overall-fit" value="15" onClick={this.update('overall_fit')}/>
                                    </label>
                                    <label>Slightly Small
                                        <input type="radio" name="overall-fit" value="35" onClick={this.update('overall_fit')}/>
                                    </label>
                                    <label>True to Size
                                        <input type="radio" name="overall-fit" value="50" onClick={this.update('overall_fit')}/>
                                    </label>
                                    <label>Slightly Large
                                        <input type="radio" name="overall-fit" value="65" onClick={this.update('overall_fit')}/>
                                    </label>
                                    <label>Runs Large
                                        <input type="radio" name="overall-fit" value="85" onClick={this.update('overall_fit')}/>
                                    </label>
                                </div>
                            </div>                   
                            <div>
                                Do You Recommend this Product?
                                <div>
                                    <label>Yes
                                        <input type="radio" name="recommend" value="true" onChange={this.update('recommend')} checked={this.state.recommend === "true"} />
                                    </label>
                                    <label>No
                                        <input type="radio" name="recommend" value="false" onChange={this.update('recommend')} checked={this.state.recommend === "false"} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="review-form-section">
                        Your Review
                        <div className="review-form-subsection">
                            <div>
                                <label className={errors['Summary'] ? 'review-form-error-title' : ''}>Review Summary
                                    <input type="text" value={this.state.summary} onChange={this.update('summary')} className={errors['Summary'] ? 'review-form-error-box' : ''} />
                                </label>
                                <div className="review-form-guidance">
                                    Example: Has great features
                                </div>
                            </div>
                            <div>
                                <label className={errors['Description'] ? 'review-form-error-title' : ''}>Your Review
                                    <textarea rows="5" cols="40" value={this.state.description} onChange={this.update('description')} className={errors['Description'] ? 'review-form-error-box' : ''} />
                                </label>
                                <div className="review-form-guidance">
                                    Please limit this field to no more than 1,000 characters.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="review-form-section">
                        Your Information

                        <div className="review-form-subsection">
                            <div>
                                <label className={errors['Nickname'] ? 'review-form-error-title' : ''}>Choose a Nickname
                                    <input type="text" value={this.state.nickname} onChange={this.update('nickname')} className={errors['Nickname'] ? 'review-form-error-box' : ''}/>
                                </label>
                                <div className="review-form-guidance">
                                    Example: Jackie27. For privacy reasons, do not use your full name or email address.
                                </div>
                            </div>
                            <div>
                                <label className={errors['Location'] ? 'review-form-error-title' : ''}>Your Location
                                    <input type="text" value={this.state.location} onChange={this.update('location')} className={errors['Location'] ? 'review-form-error-box' : ''} />
                                </label>
                            </div>
                            <div className="review-form-guidance">
                                <input type="checkbox" value="foo" />
                                Alert me when my review is published or if the Madewell team comments on my review.
                            </div>
                        </div>
                    </div>

                    <input type="submit" value="Submit" />
                    <Link to={`/products/${this.props.match.params.id}`}>
                        <button>Cancel</button>
                    </Link>

                </form>

            </div>
        )
    }
}

export default ReviewForm;
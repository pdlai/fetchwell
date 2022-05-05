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
        if(!this.state.errors) return;
        return(
            <ul className='review-form-error-list'>
                <div>We're sorry, but we have encountered the following issue(s):</div>
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
            <div className='review-form-container'>
                <div className='review-form-title'>Write Your Review</div>
                <div className='review-form-product'>{ productName }</div>

                {this.renderErrors()}

                <form className="review-form" onSubmit={this.handleSubmit}>

                    <div className="review-form-section">
                        <div className='review-form-section-title'>Your Product Rating<div className='review-form-required-text'><div>*</div>Required</div></div>
                        <div className='review-form-subsection'>
                            <div className={(errors['Rating'] ? 'review-form-error-title' : '')}>Overall Rating<div className='review-form-required'>*</div></div>
                            <div className='review-form-stars'>
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
                                <div>{ this.renderRatingLengend() }</div>
                            </div>
                        </div>
                        <div className='review-form-subsection'>
                            <div className={errors['Overall'] ? 'review-form-error-title' : ''}>Overall Fit<div className='review-form-required'>*</div></div>
                            <span className='review-form-fit-radio'>
                                <label>
                                    <input type="radio" name="overall-fit" value="15" onClick={this.update('overall_fit')}/>
                                    <span>Runs</span>
                                    <span>Small</span>
                                </label>
                                <label>
                                    <input type="radio" name="overall-fit" value="35" onClick={this.update('overall_fit')}/>
                                    <span>Slightly</span>
                                    <span>Small</span>
                                </label>
                                <label>
                                    <input type="radio" name="overall-fit" value="50" onClick={this.update('overall_fit')}/>
                                    <span>True to</span>
                                    <span>Size</span>
                                </label>
                                <label>
                                    <input type="radio" name="overall-fit" value="65" onClick={this.update('overall_fit')}/>
                                    <span>Slightly</span>
                                    <span>Large</span>
                                </label>
                                <label>
                                    <input type="radio" name="overall-fit" value="85" onClick={this.update('overall_fit')}/>
                                    <span>Runs</span>
                                    <span>Large</span>
                                </label>
                            </span>
                        </div>                   
                        <div className='review-form-subsection'>
                            <div>Do You Recommend this Product?</div>
                            <div className='review-form-recommend'>
                                <input id='review-form-recommend-yes' type="radio" name="recommend" value="true" onChange={this.update('recommend')} checked={this.state.recommend === "true"} />
                                <label htmlFor='review-form-recommend-yes'>Yes</label>
                                <input id='review-form-recommend-no' type="radio" name="recommend" value="false" onChange={this.update('recommend')} checked={this.state.recommend === "false"} />
                                <label htmlFor='review-form-recommend-no'>No</label>
                            </div>
                        </div>
                    </div>

                    <div className="review-form-section">
                        <div className='review-form-section-title'>Your Review</div>
                        <div className='review-form-subsection review-form-text'>
                            <label id='review-form-summary' className={errors['Summary'] ? 'review-form-error-title' : ''}>Review Summary<div className='review-form-required'>*</div></label>
                            <input id='review-form-summary' type="text" value={this.state.summary} onChange={this.update('summary')} className={errors['Summary'] ? 'review-form-error-box' : ''} />
                            <div className="review-form-guidance">
                                Example: Has great features
                            </div>
                        </div>
                        <div className='review-form-subsection review-form-text'>
                            <label id='review-form-description' className={errors['Description'] ? 'review-form-error-title' : ''}>Your Review<div className='review-form-required'>*</div></label>
                            <textarea htmlFor='review-form-description' rows='9' value={this.state.description} onChange={this.update('description')} className={errors['Description'] ? 'review-form-error-box' : ''} />
                            <div className="review-form-guidance">
                                Please limit this field to no more than 1,000 characters.
                            </div>
                        </div>
                    </div>

                    <div className="review-form-section">
                        <div className='review-form-section-title'>Your Information</div>
                        <div className='review-form-subsection review-form-text'>
                            <label id='review-form-nickname' className={errors['Nickname'] ? 'review-form-error-title' : ''}>Choose a Nickname<div className='review-form-required'>*</div></label>
                            <input htmlFor='review-form-nickname' type="text" value={this.state.nickname} onChange={this.update('nickname')} className={errors['Nickname'] ? 'review-form-error-box' : ''}/>
                            <div className="review-form-guidance">
                                Example: Jackie27. For privacy reasons, do not use your full name or email address.
                            </div>
                        </div>
                        <div className='review-form-subsection review-form-text'>
                            <label id='review-form-location' className={errors['Location'] ? 'review-form-error-title' : ''}>Your Location<div className='review-form-required'>*</div></label>
                            <input htmlFor='review-form-location' type="text" value={this.state.location} onChange={this.update('location')} className={errors['Location'] ? 'review-form-error-box' : ''} />
                            <div className="review-form-guidance">
                                Example: New York, NY
                            </div>
                        </div>
                        <div className="review-form-guidance">
                            <input type="checkbox" value="foo" />
                            Alert me when my review is published or if the Madewell team comments on my review.
                        </div>
                    </div>

                    <button className='review-form-submit-button' type='submit'>Submit</button>
                    <Link to={`/products/${this.props.match.params.id}`}>
                        <button className='review-form-cancel-button' >Cancel</button>
                    </Link>

                </form>

            </div>
        )
    }
}

export default ReviewForm;
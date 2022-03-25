import React from 'react';
import { Link } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props){
        super(props);
    }

    update(field){

    }

    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    handleSubmit(){

    }

    render(){
        console.log([...Array(5)])
        return(
            <div>
                {this.renderErrors()}
                <div>Write Your Review</div>
                <div>put the product name here</div>
                <form onSubmit={this.handleSubmit}>
                    <div className="review-form-section">
                        Your Product Rating
                        <div className="review-form-subsection">
                            <div>
                                Overall Rating
                            </div>
                            <div>
                                Overall Fit
                            </div>
                            <div>
                                Do You Recommend this Product?
                            </div>
                        </div>
                    </div>

                    <div className="review-form-section">
                        Your Review
                        <div className="review-form-subsection">
                            <div>
                                Writing Guildlines Drop Down Menu
                            </div>
                            <div>
                                Review Summary
                            </div>
                            <div>
                                Your Review
                            </div>
                        </div>
                    </div>

                    <div className="review-form-section">
                        Your Information
                        <div className="review-form-subsection">
                            <div>
                                Choose a Nickname
                            </div>
                            <div>
                                Your Location
                            </div>
                            <div>
                                Checkbox, Alert me when my review is published or if the Fetchwell team comments on my review.
                            </div>
                        </div>
                    </div>

                    <input type="submit" value="Submit" />
                    <Link to={`/`}>
                        <button>Cancel</button>
                    </Link>

                </form>

            </div>
        )
    }
}

export default ReviewForm;
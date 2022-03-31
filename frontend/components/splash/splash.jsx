import React from 'react';
import { Link } from 'react-router-dom';
import Section1_1 from '/app/assets/images/section1-1.jpg'

class Splash extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(filters){
        this.props.updateFilters(filters);
    }

    render(){
        console.log(123)

        return(
            <div className="splash-container">

                <div className="splash-section1">
                    <img src={Section1_1} alt="main-cover" />
                    <div>
                        <div>In With The New</div>
                        <div>Shake things up with bright colors and fresh takes on classic shapes.</div>
                        <Link className="nav-link" to="/womens/new" onClick={ () => this.handleClick({ gender: "womens", category: "new" })}>New</Link>
                    </div>
                </div>

                

            </div>
        )
    }
}

export default Splash;
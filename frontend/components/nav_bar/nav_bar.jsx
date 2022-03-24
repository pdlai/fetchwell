import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class NavBar extends React.Component {
    constructor(props){
        super(props);
    }

    handleClick(filters){
        this.props.updateFilters(filters);
    }

    componentDidMount(){
        this.path = this.props.location.pathname;
        let queries = this.path.split("/");
        if( queries[1] === 'womens' || queries[1] === 'mens'){
            this.handleClick({
                gender: queries[1],
                category: queries[2],
                subcategory: queries[3]
            })
        }
    }

    render(){
        return(
            <div className="nav-bar-container">
                <Link to="/">Womens</Link>
                <Link to="/">Mens</Link>

                <Link to="/" className="header-link">
                    <h1>Fetchwell</h1>
                </Link>
                <GreetingContainer />
                <div className="nav-bar">
                    <ul className="nav-links">
                        <li>
                            <Link to="/womens/new" onClick={ () => this.handleClick({ gender: "womens", category: "new" })}>New</Link>
                            <Link to="/womens/clothing/jeans" onClick={ () => this.handleClick({ gender: "womens", category: "clothes", subcategory: "jeans" })}>Denim</Link>
                            <Link to="/womens/clothing" onClick={ () => this.handleClick({ gender: "womens", category: "clothes" })}>Clothing</Link>
                            <Link to="/womens/shoes" onClick={ () => this.handleClick({ gender: "womens", category: "shoes" })}>Shoes</Link>
                            <Link to="/womens/accessories" onClick={ () => this.handleClick({ gender: "womens", category: "accessories" })}>Accessories</Link>
                            <Link to="/womens/brands" onClick={ () => this.handleClick({ gender: "womens", category: "brands" })}>Labels We Love</Link>
                            <Link to="/womens/sale" onClick={ () => this.handleClick({ gender: "womens", category: "sale" })}>Sale</Link>

                            <Link to="/">Community</Link>
                            <Link to="/">Preloved</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(NavBar);
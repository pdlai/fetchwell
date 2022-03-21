import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const currentUser = this.props.currentUser;
        const logout = this.props.logout.bind(this);
        if (currentUser){
            return(
                <div className="login-header">
                    <h2>Hello, {currentUser.username}</h2>
                    <button onClick={logout}>Log Out</button>
                </div>
            )
        } else {
            return(
                <nav className="login-signup">
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </nav>
            )
        }
    }
}

export default Greeting;
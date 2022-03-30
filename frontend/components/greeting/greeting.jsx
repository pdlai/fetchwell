import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';

class Greeting extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const currentUser = this.props.currentUser;
        if (currentUser){
            return(
                <div className="login-header">
                    <h2>Hello, {currentUser.username}</h2>
                    <AiOutlineUser size='24px' />
                    <button onClick={this.props.logout}>Log Out</button>
                </div>
            )
        } else {
            return(
                <nav className="login-signup">
                    <button onClick={() => this.props.openModal('login')}>Login</button>
                    &nbsp;or&nbsp;
                    <button onClick={() => this.props.openModal('signup')}>Signup</button>
                </nav>
            )
        }
    }
}

export default Greeting;
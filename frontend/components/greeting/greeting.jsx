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
                    <AiOutlineUser size='24px' />
                    <div>Hi, {currentUser.username}</div>
                    <button onClick={this.props.logout}>Log Out</button>
                </div>
            )
        } else {
            return(
                <nav className="login-signup">
                    <button onClick={() => this.props.openModal('login')}><AiOutlineUser size='24px' /></button>
                    {/* &nbsp;or&nbsp;
                    <button onClick={() => this.props.openModal('signup')}>Signup</button> */}
                </nav>
            )
        }
    }
}

export default Greeting;
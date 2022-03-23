import React from 'react';
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        });
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

    render(){
        let sessionLink;
        if (this.props.formType === 'Sign Up'){
            sessionLink = <Link to="/login">Sign In</Link>
        } else {
            sessionLink = <Link to="/signup">Sign Up</Link>
        }
        return(
            <div className="login-signup-form-container">
                <br/>
                Please {this.props.formType}
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label>
                    <br/>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <input type="submit" value={this.props.formType}/>
                </form>
                <br/>
                {sessionLink}
            </div>
        )
    }
}

export default SessionForm;
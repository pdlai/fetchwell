import React from 'react';
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal).then(() => this.props.fetchCartItems(this.props.currentUser.id));
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

    handleDemoUser(e){
        e.preventDefault();
        this.setState({ username: "user1", password: "password" });
        const user = { username: "user1", password: "password" };
        this.props.processForm(user).then(this.props.closeModal).then(() => this.props.fetchCartItems(this.props.currentUser.id));
    }

    render(){
        return(
            <div className="login-signup-form-container">
                <br/>
                <div onClick={this.props.closeModal} className="close-x">X</div>
                Please {this.props.formType} or {this.props.otherForm}
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
                <button onClick={this.handleDemoUser}>Demo User</button>
                <br/>
            </div>
        )
    }
}

export default withRouter(SessionForm);
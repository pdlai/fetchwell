import React from 'react';
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            firstName: "",
            lastName: ""
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
        if (!this.props.errors.length) return;
        return(
            <ul className='session-errors'>
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
        if (!this.demoTimer){
            let count = 0;
            let key;
            let demoUser = 'DemoUserpassword'
            this.demoTimer = setInterval(() => {
                if (count < 8){
                    key = 'username';
                } else if (count < 16) {
                    key = 'password';
                }
                this.setState({ [key] : this.state[key] + demoUser[count]})
                count++;
                if (count === 16) {
                    clearInterval(this.demoTimer);
                    this.props.processForm(this.state).then(this.props.closeModal).then(() => this.props.fetchCartItems(this.props.currentUser.id));
                }
            }, 100)
        }
    }

    render(){
        let formType = this.props.formType;
        let formSubtitle;
        let formFields;
        let signInOptions;
        let submitButton;
        let demoButton;
        let legalStuff;
        let otherForm;

        if (formType === 'Join Now'){
            formSubtitle = <div className='form-subtitle'>And Start earning those points (!).</div>
            formFields = <div id="first-last-name-field">
                <label>
                    <input 
                        type="text"
                        value={this.state.firstName}
                        onChange={this.update('firstName')}
                        placeholder="First Name"
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        value={this.state.lastName}
                        onChange={this.update('lastName')}
                        placeholder="Last Name"
                    />
                </label>
            </div>
            signInOptions = <div></div>
            submitButton = <button id="signup-submit-button" type="submit">Sign Up Now</button>
            demoButton= <div></div>
            legalStuff = <div id="signup-legal-stuff">By clicking "Sign Up Now," you agree to a bunch of&nbsp;
                <div>terms and conditions</div> that allow us to sell your information, you
                can see in small font our <div>privacy policy</div>.
            </div>
            otherForm = <div className='other-form-container'>
                <div>Already an insider?</div>
                <div>{this.props.otherForm}</div>
            </div>
        } else {
            // formSubtitle = <div></div>
            formFields = <div></div>
            signInOptions = <div className="sign-in-options">
                <div><input type="checkbox"/>Remember me</div>
                <div>Forgot password?</div>
            </div>
            submitButton = <button id="session-submit-button" type="submit" >Let's Go</button>
            demoButton= <button id="session-demo-button" onClick={this.handleDemoUser}>Demo User</button>
            legalStuff = <div></div>
            otherForm = <div className='other-form-container'>
                <div>Don't have an account?</div>
                <div>{this.props.otherForm}</div>
            </div>
        }

        return(
            <div className="login-signup-form-container">
                <div onClick={this.props.closeModal} className="close-x">X</div>

                <div className='login-signup-form'>
                    <div className='form-title'>{this.props.formType}</div>
                    {formSubtitle}
                    {this.renderErrors()}
                    <form onSubmit={this.handleSubmit} id="session-form">
                        {formFields}
                        <label>
                            <input 
                                type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                placeholder="Username"
                            />
                        </label>
                        <label>
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                            />
                        </label>
                        {signInOptions}
                        {submitButton}
                    </form>
                    {demoButton}
                    {legalStuff}
                    <br/>
                    {otherForm}
                </div>

            </div>
        )
    }
}

export default withRouter(SessionForm);
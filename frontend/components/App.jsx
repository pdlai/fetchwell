import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Redirect, Switch } from "react-router";

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <header>
                    <h1>Fetchwell</h1>
                    <GreetingContainer />
                </header>

                {/* putting everything here to test */}


                <Switch>
                    <AuthRoute path="/login" component={LoginFormContainer} />
                    <AuthRoute path="/signup" component={SignupFormContainer} />

                    {/* redirects to splash page with invalid path, may want to change later */}
                    <Redirect to="/" />
                </Switch>

            </div>
        )
    }
}

export default App;


import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./App";

// const Root = ({ store }) => (
//     <Provider store={store}>
//         <HashRouter>
//             <App />
//         </HashRouter>
//     </Provider>
// )

class Root extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Provider store={this.props.store}>
                <HashRouter>
                    <App />
                </HashRouter>
            </Provider>
        )
    }
}

export default Root;
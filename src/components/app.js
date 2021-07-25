import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from "./pages/home";
import NoMatch from "./pages/no-match";

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>

                <Router basename={`${process.env.PUBLIC_URL}`}>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/" component={NoMatch}/>
                        </Switch>
                    </div>
                </Router>
              
          </div>
      );
    }
}

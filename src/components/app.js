import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from "./pages/home";
import NoMatch from "./pages/no-match";

const packageJson = require("../../package.json");

export default class App extends Component {
    render() {
        return (
            <div className='container'>

                <Router basename={packageJson.homepage}>
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

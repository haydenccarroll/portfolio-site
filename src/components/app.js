import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import axios from "axios";


import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import PreviousProjects from "./pages/previous-projects";
import CurrentSprint from "./pages/current-sprint";
import Todo from "./pages/todo";
import PortfolioManager from './pages/portfolio-manager';
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedInStatus: "NOT_LOGGED_IN"
        }

        this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
        this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
        this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
    }
    
    handleSuccessfulLogin() {
        this.setState({
            loggedInStatus: "LOGGED_IN"
        });
    }

    handleUnsuccessfulLogin() {
        this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
        });
    }

    handleSuccessfulLogout() {
        this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
        });
    }

    checkLoginStatus() {
        return axios.get("https://api.devcamp.space/logged_in", {withCredentials: true}
            ).then(response => {
                const LOGGED_IN = response.data.logged_in;
                const loggedInStatus = this.state.loggedInStatus;

                if (LOGGED_IN && loggedInStatus === "NOT_LOGGED_IN") {
                    this.setState({
                        loggedInStatus: "LOGGED_IN"
                    });
                } else if (!LOGGED_IN && loggedInStatus === "LOGGED_IN") {
                    this.setState({
                        loggedInStatus: "NOT_LOGGED_IN"
                    });
                }
                
            })
            .catch(error => {
                console.log("Error", error);
            });
    }

    authorizedPages() {
        return [
            <Route 
                key="portfolio-manager" 
                path="/portfolio-manager"
                component={PortfolioManager} />
        ]
    }

    componentDidMount() {
        this.checkLoginStatus();
    }


    render() {
        return (
            <div className='container'>

                <Router basename={`${process.env.PUBLIC_URL}`}>
                    <div>
                        <NavigationContainer 
                            loggedInStatus={this.state.loggedInStatus}
                            handleSuccessfulLogout={this.handleSuccessfulLogout}
                        />


                        <Switch>
                            <Route exact path="/" component={Home} />

                            <Route 
                                path='/auth'
                                render={props => (
                                    <Auth
                                        {...props}
                                        handleSuccessfulLogin={this.handleSuccessfulLogin}
                                        handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                                    />
                                )}
                            />

                            <Route path="/previous-projects" component={PreviousProjects} />
                            <Route path="/current-sprint" component={CurrentSprint} />
                            <Route path="/todo" component={Todo} />
                            {this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null}

                            <Route path="/" component={NoMatch}/>
                        </Switch>
                    </div>
                </Router>
              
          </div>
      );
    }
}

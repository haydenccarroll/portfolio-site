import React from "react";
import {withRouter} from "react-router";
import { NavLink} from "react-router-dom";
import axios from "axios";
const NavigationContainer = (props) => {

    const dynamicLink  = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to={route} activeClassName="nav-link-active">{linkText}</NavLink>
            </div>
        );

    }

    const handleSignOut = () => {
        axios.delete("https://api.devcamp.space/logout", {withCredentials: true})
        .then(response => {

            // sign out worked
            if (response.status == 200) {
                props.history.push("/");
                props.handleSuccessfulLogout();
            }
            return response.data;
        })
        .catch(error => {
            console.log("Error signing out", error);
        });
    }

    return (
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/portfolio-site" activeClassName="nav-link-active">Home</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/portfolio-site/about-me" activeClassName="nav-link-active">About</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/portfolio-site/contact" activeClassName="nav-link-active">Contact</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/portfolio-site/blog" activeClassName="nav-link-active">Blog</NavLink>
                </div>

                {props.loggedInStatus === "LOGGED_IN" ? dynamicLink("/portfolio-site/portfolio-manager", "Portfolio Manager") : null}

            </div>
            <div className="right-side">
                Hayden Carroll

                {props.loggedInStatus === "LOGGED_IN" ? <a onClick={handleSignOut}>Sign Out</a> : null}
            </div>
        </div>
    );


}

export default withRouter(NavigationContainer);
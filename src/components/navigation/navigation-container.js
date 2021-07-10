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
            if (response.status === 200) {
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
                    <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName="nav-link-active">Home</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to={`${process.env.PUBLIC_URL}/previous-projects`} activeClassName="nav-link-active">Previous Projects</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to={`${process.env.PUBLIC_URL}/current-sprint`} activeClassName="nav-link-active">Current Sprint</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to={`${process.env.PUBLIC_URL}/todo`} activeClassName="nav-link-active">//TODO</NavLink>
                </div>

                {props.loggedInStatus === "LOGGED_IN" ? dynamicLink(`${process.env.PUBLIC_URL}/portfolio-manager`, "Portfolio Manager") : null}

            </div>
            <div className="right-side">
                Hayden Carroll

                {props.loggedInStatus === "LOGGED_IN" ? <button onClick={handleSignOut}>Sign Out</button> : null}
            </div>
        </div>
    );


}

export default withRouter(NavigationContainer);
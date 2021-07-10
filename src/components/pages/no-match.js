import React from "react";
import {Link} from "react-router-dom";

export default function NoMatch() {
    return (
        <div>
            <h2>We couldn't find that page</h2>
            <Link to={`${process.env.PUBLIC_URL}/`}>Return to homepage</Link>
        </div>
    )
}
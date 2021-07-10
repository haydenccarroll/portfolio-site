import React from "react";
import {Link} from "react-router-dom";

export default function() {
    return (
        <div className="todo-section">
            <div className="section-title">
                <h1>About Me</h1>
            </div>

            <div className="todo-list">
                <ul>
                    <li>Go to college</li>
                    <li>Learn moble app development</li>
                    <li>More stuff</li>
                    <li>Goes here</li>
                </ul>
            </div>
        </div>
    );
}
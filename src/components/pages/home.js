import React, {Component} from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight }  from '@fortawesome/free-solid-svg-icons'

import PreviousProjects from "./previous-projects";
import CurrentSprint from "./current-sprint";
import Todo from "./todo";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            viewableProjectState: "PAST_PROJECTS"
        }

        this.PROJECT_ARRAY_STATE = ["PAST_PROJECTS", "CURRENT_PROJECTS", "FUTURE_PROJECTS"];


        this.projectWheelLeft = this.projectWheelLeft.bind(this);
        this.projectWheelRight = this.projectWheelRight.bind(this);
    }

    projectWheelLeft() {
        let currentIndex = this.PROJECT_ARRAY_STATE.indexOf(this.state.viewableProjectState);
        let newIndex = currentIndex - 1;

        if (newIndex === -1) {
            newIndex = this.PROJECT_ARRAY_STATE.length -1;
        }

        this.setState({
            viewableProjectState: this.PROJECT_ARRAY_STATE[newIndex]
        });
    }

    projectWheelRight() {
        let currentIndex = this.PROJECT_ARRAY_STATE.indexOf(this.state.viewableProjectState);
        let newIndex = currentIndex + 1;

        if (newIndex === this.PROJECT_ARRAY_STATE.length) {
            newIndex = 0;
        }

        this.setState({
            viewableProjectState: this.PROJECT_ARRAY_STATE[newIndex]
        });
    }

    render() {
        console.log("Re rendered!");
        return (
            <div className="page-wrapper">
                <div className="header-wrapper">
                    <div className="header-text">
                        <h1>Hayden Carroll</h1>
                        <h3>Software Developer</h3>
                    </div>
                </div>

                <div className="content-wrapper">

                    <div className="about-section">
                        <h1>About Me</h1>
                        <div className="about-content-wrapper">
                            <div className="image-wrapper">
                                <img src="../../static/assets/images/portrait.jpg" alt="Portrait of me"/>
                            </div>
                            <div className="about-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquid recusandae hic vitae iste. Soluta, adipisci fuga ducimus omnis maxime quia libero ab molestiae ex perspiciatis obcaecati iusto fugit placeat culpa. Dignissimos quis earum ducimus deserunt nulla est non, sed tempora labore commodi odio magnam totam doloremque ea, eaque eum aperiam ex adipisci, aspernatur soluta voluptas veniam a accusantium. Officia hic laboriosam alias incidunt expedita culpa repellendus nam magni explicabo assumenda repudiandae ab tempora deserunt blanditiis vero nihil nesciunt quo labore veniam voluptatibus natus, fugiat error provident. Error adipisci rem architecto porro temporibus quaerat tempora officia sequi praesentium unde. Consequatur!
                            </div>                        
                        </div>

                    </div>

                    <div className="resume-section">
                        <h1>Resume</h1>
                        <div className="resume-content-wrapper">
                            <a href="../../../static/assets/images/portrait.jpg" alt="Resume link" target="_blank">Click me to view my Resume!</a>
                        </div>
                    </div>

                    <div className="project-wheel">
                        <div className="arrow-div">
                            <FontAwesomeIcon icon={faArrowLeft} onClick={this.projectWheelLeft} />
                        </div>
                        {this.state.viewableProjectState === "PAST_PROJECTS" ? <PreviousProjects /> : null}
                        {this.state.viewableProjectState === "CURRENT_PROJECTS" ? <CurrentSprint /> : null}
                        {this.state.viewableProjectState === "FUTURE_PROJECTS" ? <Todo /> : null}
                        <div className="arrow-div">
                            <FontAwesomeIcon icon={faArrowRight} onClick={this.projectWheelRight} />
                        </div>
                    </div>

                    <div className="contact-section">
                        <h1>Contact Me</h1>
                        <div className="social-links">
                            <div className="social-link">
                                LinkedIn
                            </div>
                            <div className="social-link">
                                Github
                            </div>
                        </div>
                        <form className="contact-me-form">
                            <div className="form-element-div">
                                <input type="email" name="user-email" id="user-email" placeholder="Your Email"/>
                                <label htmlFor="user-email">Your Email</label>
                            </div>
                            <div className="form-element-div">
                                <input type="text" name="email-title" id="email-title" placeholder="Subject"/>
                                <label htmlFor="email-title">Subject</label>
                            </div>

                            <div className="form-element-div">
                                <textarea name="email-body" id="email-body" rows="10" placeholder="Message Content"></textarea>
                                <label htmlFor="email-body">Message Content</label>
                            </div>

                            <input type="submit" value="Submit" id="submit"/>
                        </form>
                    </div>

                </div>
            </div>

        );
        
    }
}
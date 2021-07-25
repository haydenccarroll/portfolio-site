import React, {Component} from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight}  from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

import { Document, Page, pdfjs } from "react-pdf";



import PreviousProjects from "./previous-projects";
import CurrentSprint from "./current-sprint";
import Todo from "./todo";

import ProfileImg from "./../../assets/images/portrait.jpg";
import BackgroundImg from "./../../assets/images/heading-background.jpg"
import Resume from "./../../assets/pdf/Hayden_Carroll_Resume.pdf";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            viewableProjectState: "PAST_PROJECTS",
            scroll: {
                filter: "brightness(100%)",
            },
        }

        this.PROJECT_ARRAY_STATE = ["PAST_PROJECTS", "CURRENT_PROJECTS", "FUTURE_PROJECTS"];



        this.projectWheelLeft = this.projectWheelLeft.bind(this);
        this.projectWheelRight = this.projectWheelRight.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
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

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        this.setState({
            scroll: {filter: `brightness(${1 - (window.scrollY / 250)})`}
        });
    }

    render() {
        return (
            <div className="page-wrapper">
                <div className="header-wrapper" style={Object.assign({}, this.state.scroll, {background: `url(${BackgroundImg})`})}>
                    <div className="header-text">
                        <h1>Hayden Carroll</h1>
                        <h2>Software Developer</h2>
                    </div>
                </div>

                <div className="outer-content-wrapper">
                    <div id="outer-about-div">
                        <div className="about-section content-wrapper">
                            <div className="section-title">
                                <h1>About Me</h1>
                            </div>
                            <div className="about-content-wrapper">
                                <div className="image-wrapper" >
                                    <img src={ProfileImg} alt="Portrait of me"/>
                                </div>
                                <div className="about-text">
                                    <p>
                                        My name is Hayden Carroll and I am a recent Computer Science graduate
                                        from North Idaho College. I have been very passionate about Computer
                                        Science my whole life, specifically software development, Through the years,
                                        I have been in charge of and a part of many different extracurricular Computer
                                        Science clubs such as leader of the North Idaho College Robotics Team, Website
                                        lead for Project DaVinci, and team member of the North Idaho College ICPC
                                        programming competition for 2021. Currently, I am a coding mentor teaching
                                        middle school through high school students the fundamentals of web develement
                                        at North Idaho College. Starting in the Fall of 2021, I will be attending the
                                        University of Idaho to finish my Bachelor's degree in Computer Science in the
                                        Fall of 2022. I hope to land a job working in software development right after
                                        college!
                                    </p>
                                    <div className="social-links">
                                        <div className="social-link">
                                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faLinkedinIn} />
                                            </a>
                                        </div>
                                        <div className="social-link">
                                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div id="outer-project-div">
                        <div className="project-wheel content-wrapper"  >
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
                    </div>
                    <div id="outer-resume-div">
                        <div className="resume-section content-wrapper" >
                            <div className="section-title">
                                <h1>Resume</h1>
                            </div>
                            <div className="resume-content-wrapper">
                                <Document file={Resume} className="resume-document"> <Page renderMode="svg" pageNumber={1}  scale={1}/> </Document>
                                <a href={Resume} alt="Resume link" download>Click to download Resume</a>
                            </div>
                        </div>
                    </div>


                    <div id="outer-contact-div">
                        <div className="contact-section content-wrapper">
                            <div className="section-title">
                                <h1>Contact Me</h1>
                            </div>

                            <form className="contact-me-form">
                                <div className="email-subject">
                                    <div className="form-element-div">
                                        <input type="email" name="user-email" id="user-email" placeholder="Your Email"/>
                                        <label htmlFor="user-email">Your Email</label>
                                    </div>
                                    <div className="form-element-div">
                                        <input type="text" name="email-title" id="email-title" placeholder="Subject"/>
                                        <label htmlFor="email-title">Subject</label>
                                    </div>
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
                
            </div>

        );
        
    }
}
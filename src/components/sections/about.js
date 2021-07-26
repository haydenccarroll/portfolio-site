import React from "react";


import ProfileImg from "./../../assets/images/portrait.jpg";

export default function About() {
    return (
        <div className="about-section">
            <div className="section-title">
                <h1>About Me</h1>
            </div>
            <div className="about-content-wrapper">
                <div className="image-wrapper" >
                    <img src={ProfileImg} alt="Portrait of me"/>
                </div>
                <div className="about-text">
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;My name is Hayden Carroll and I
                        am a recent Computer Science graduatefrom North Idaho College. 
                        I have been very passionate about Computer
                        Science my whole life, specifically software development. Through the years,
                        I have been in charge of and a part of many different extracurricular Computer
                        Science clubs such as leader of the North Idaho College Robotics Team, Website
                        lead for Project DaVinci, and team member of the North Idaho College ICPC
                        programming competition for 2021.
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp; Starting in the Fall of 2021, I will be attending the
                        University of Idaho to finish my Bachelor's degree in Computer Science in the
                        Fall of 2022. I hope to land a job working in software development right after
                        college!
                    </p>
                    <div className="social-links">
                        <div className="social-link">
                            <a href="https://www.linkedin.com/in/hayden-carroll-764158218/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="https://github.com/haydenccarroll" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube }  from '@fortawesome/free-brands-svg-icons'

export default function PreviousProjects() {
    return (
        <div className="project-section">
            <div className="section-title">
                <h1>Previous Projects</h1>
            </div>
            <div className="project-preview-wrapper">
                <div className="project-preview">
                    <div className="project-title">
                        <h3>ARTEMIS</h3>
                    </div>
                    <div className="project-description">
                        <p> 
                            The NASA Artemis Lunar Lava Tube Competition is a competition funded by
                            the Washington Space Grant Consortium. Teams made up of undergraduate students
                            around the nation compete in a course to simulate rovers navigating through
                            lava tubes on the Moon.
                        </p>

                        <p>
                            As the Team Lead, I am responsible for managing funds ($2,000), orchestrating
                            team meetings, contacting competition organizers, and ensuring we are meeting
                            our deadlines. From the technical side, I have also helped build the robot,
                            program the autonomous ultrasonic functions, and create a program to pass
                            the video feed of our rover to a remote computer. 
                        </p>
                    </div>
                    <div className="project-links">
                        <div className="github">
                            <FontAwesomeIcon icon={faGithub} />

                        </div>
                        <div className="youtube">
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                    </div>
                </div>
                <div className="project-preview">
                    <div className="project-title">
                        <h4>PROJECT DAVINCI</h4>
                    </div>
                    <div className="project-description">
                        <p>
                            For a couple years, I was a part of the North Idaho STEM Charter 
                            Academy CubeSat team. Our team was chosen by NASA to develop and
                            create a satellite to be launched into space. In December of 2018,
                            the satellite launched with the ability to send morse code messages
                            to anyone on Earth. 
                        </p>
                        <p>
                            As the Web Development Lead, I created and maintained a website that
                            countless people saw across the world. I was also responsible for helping
                            host fundraising events to fund the opportunity. My team and I were able
                            to raise over $250,000 for the project through community outreach.  
                        </p>
                    </div>
                    <div className="project-links">
                        <div className="github">
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                        <div className="youtube">
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                    </div>
                </div>
                <div className="project-preview">
                    <div className="project-title">
                        <h4>OUT OF THE DARK</h4>
                    </div>
                    <div className="project-description">
                        <p>
                            Out Of The Dark is a 2D top down maze game created by
                            myself and one teammate for our Computer Science II class.
                            Because our game was rather large in scope, I had to learn good
                            strategies for organizing such a large codebase. My favorite
                            part of the project was to get C++ and Python to communicate
                            to each other.
                        </p>
                    </div>
                    <div className="project-links">
                        <div className="github">
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                        <div className="youtube">
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
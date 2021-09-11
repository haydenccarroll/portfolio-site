import React from "react";



import OutOfTheDarkImg from "../../assets/images/out-of-the-dark.png";
import CubesatImg from "../../assets/images/cubesat.png";
import ArtemisImg from "../../assets/images/artemis.png";

export default function PreviousProjects() {
    return (
        <div className="project-section">
            <div className="section-title">
                <h1>Previous Projects</h1>
            </div>
            <div className="project-preview-wrapper">
                <div className="project-preview">
                    <div className="project-title">
                        <h2>ARTEMIS</h2>
                    </div>
                    <div className="project-description">
                        <img src={ArtemisImg} alt="Artemis Robot"/>

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
                        <div className="social-link">
                            <a href="https://github.com/NIC-Artemis-Robotic-Team" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>

                        </div>
                        <div className="social-link">
                            <a href="https://youtu.be/R5eFCb2S9to" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-preview">
                    <div className="project-title">
                        <h2>PROJECT DAVINCI</h2>
                    </div>
                    <div className="project-description">
                        <img src={CubesatImg} alt="CubeSat home page"/>

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
                        <div className="social-link">
                            <a href="https://github.com/haydenccarroll/project-davinci" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="https://www.nasa.gov/image-feature/elana-19-davinci" target="_blank" rel="noopener noreferrer">
                                {/* <FontAwesomeIcon icon={faGlobe} /> */}
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="https://www.youtube.com/watch?v=1lw6E9o82U4" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-preview">
                    <div className="project-title">
                        <h2>OUT OF THE DARK</h2>
                    </div>
                    <div className="project-description">
                        <img src={OutOfTheDarkImg} alt="Out of the dark starting screen"/>
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
                        <div className="social-link">
                            <a href="https://github.com/haydenccarroll/Out-Of-The-Dark" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="https://www.youtube.com/watch?v=4APMlpVHurY" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
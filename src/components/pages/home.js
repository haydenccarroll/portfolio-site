import React, {Component} from "react";

import About from "./../sections/about";
import PreviousProjects from "./../sections/previous-projects"; 
import Resume from "./../sections/resume";
import Contact from "./../sections/contact";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scroll: {
                filter: "brightness(100%)",
            },
        }

        this.handleScroll = this.handleScroll.bind(this);
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
                <div className="header-wrapper" style={this.state.scroll}>
                    <div className="header-text">
                        <h1>Hayden Carroll</h1>
                        <h2>Software Developer</h2>
                    </div>
                </div>

                <div className="outer-content-wrapper">
                    <div id="outer-about-div">
                        <div className="content-wrapper">
                            <About />
                        </div>
                    </div>
                    <div id="outer-project-div">
                        <div className="content-wrapper">
                            <PreviousProjects />
                        </div>
                    </div>
                    <div id="outer-resume-div">
                        <div className="content-wrapper">
                            <Resume />
                        </div>
                    </div>

                    <div id="outer-contact-div">
                        <div className="content-wrapper">
                            <Contact />
                        </div>
                    </div>
                
                </div>
                
            </div>

        );
        
    }
}
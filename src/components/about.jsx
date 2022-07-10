import React from "react";
import myImage from "../img/portrait.jpg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "Python_skill", content: "Python", percentage: "90%", value: "90"},
        { id: "Cpp_skill", content: "C/C++", percentage: "80%", value: "80"},
        { id: "Go_skill", content: "Go", percentage: "85%", value: "85"},
        { id: "Bash_skill", content: "Bash", percentage: "70%", value: "70"},
        { id: "Git_skill", content: "Git", percentage: "75%", value: "75"},
        { id: "SQL_skill", content: "SQL", percentage: "65%", value: "65"},
        { id: "JavaScript_skill", content: "JavaScript", percentage: "60%", value: "60"},
        { id: "HTML_skill", content: "HTML", percentage: "85%", value: "85" },
        { id: "CSS_skill", content: "CSS", percentage: "75%", value: "75" }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "My name is Hayden Carroll and I am a senior Computer Science student at the University of Idaho. I plan to graduate in the Fall of 2022. I am very passionate about software engineering and hope to become a backend software engineer."
        },
        {
          id: "second-p-about",
          content:
            "My favorite technology I am actively learning now is Golang. At my software engineering internship with Kochava, I was first exposed to Golang, which was very easy to pick up. I am also learning Docker, and how to connect different Docker containers together in a network. "
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.percentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.percentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      <div className="portrait-container">
                        <img src={myImage} class="portrait-photo" alt="My photo"/>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>


                            {content.content}
                          </p>
                        );
                      })}
                      <a href="https://docs.google.com/document/d/1kgzcB_d_1nhIG451LA-ZJwMIAKSL5kImf0DK04bWOJE/edit?usp=sharing">View my Resume here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

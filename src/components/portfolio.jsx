// import React from "react";

// //import stock
// import stock from "../img/image1.jpg";
// import stock1 from "../img/image2.jpg";
// import stock2 from "../img/image3.jpg";
// import stock3 from "../img/image4.jpg";
// import stock4 from "../img/image5.jpg";
// import stock5 from "../img/image6.jpg";

// class Portfolio extends React.Component {
//   render() {
//     return (
//       <section id="work" className="portfolio-mf sect-pt4 route">
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-12">
//               <div className="title-box text-center">
//                 <h3 className="title-a">Projects</h3>
//                 <div className="line-mf"></div>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-4">
//               <div className="work-box">
//                 <a href={stock} data-lightbox="gallery-vmarine">
//                   <div className="work-img">
//                     <img src={stock} alt="" className="img-fluid" />
//                   </div>
//                   <div className="work-content">
//                     <div className="row">
//                       <div className="col-sm-8">
//                         <h2 className="w-title">Artemis</h2>
//                         <div className="w-more">
//                           <span className="w-ctegory">
//                             HTML5 CSS3 Bootstrap ReactJS
//                           </span>
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div className="w-like">
//                           <span className="ion-ios-plus-outline"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href={stock1}
//                   data-lightbox="gallery-vmarine"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock2}
//                   data-lightbox="gallery-vmarine"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock3}
//                   data-lightbox="gallery-vmarine"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock4}
//                   data-lightbox="gallery-vmarine"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock5}
//                   data-lightbox="gallery-vmarine"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="work-box">
//                 <a href={stock} data-lightbox="gallery-aguadeluz">
//                   <div className="work-img">
//                     <img src={stock} alt="" className="img-fluid" />
//                   </div>
//                   <div className="work-content">
//                     <div className="row">
//                       <div className="col-sm-8">
//                         <h2 className="w-title">Lorem Ipsum</h2>
//                         <div className="w-more">
//                           <span className="w-ctegory">
//                             HTML5 CSS3 Bootstrap Webpack SmoothScrolling
//                             VanillaJS
//                           </span>{" "}
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div className="w-like">
//                           <span className="ion-ios-plus-outline"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href={stock1}
//                   data-lightbox="gallery-aguadeluz"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock2}
//                   data-lightbox="gallery-aguadeluz"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock3}
//                   data-lightbox="gallery-aguadeluz"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock4}
//                   data-lightbox="gallery-aguadeluz"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock5}
//                   data-lightbox="gallery-aguadeluz"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="work-box">
//                 <a href={stock} data-lightbox="gallery-todo">
//                   <div className="work-img">
//                     <img src={stock} alt="" className="img-fluid" />
//                   </div>
//                   <div className="work-content">
//                     <div className="row">
//                       <div className="col-sm-8">
//                         <h2 className="w-title">Lorem Ipsum</h2>
//                         <div className="w-more">
//                           <span className="w-ctegory">
//                             HTML5 CSS3 Bootstrap Webpack ReactJS
//                           </span>
//                           {/*} / <span className="w-date">18 Sep. 2018</span>*/}
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div className="w-like">
//                           <span className="ion-ios-plus-outline"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href={stock1}
//                   data-lightbox="gallery-todo"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock2}
//                   data-lightbox="gallery-todo"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock3}
//                   data-lightbox="gallery-todo"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock4}
//                   data-lightbox="gallery-todo"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock5}
//                   data-lightbox="gallery-todo"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="work-box">
//                 <a href={stock} data-lightbox="gallery-medlingos">
//                   <div className="work-img">
//                     <img src={stock} alt="" className="img-fluid" />
//                   </div>
//                   <div className="work-content">
//                     <div className="row">
//                       <div className="col-sm-8">
//                         <h2 className="w-title">Lorem Ipsum</h2>
//                         <div className="w-more">
//                           <span className="w-ctegory">
//                             Bootstrap ReactJS GoogleAPI
//                           </span>
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div className="w-like">
//                           <span className="ion-ios-plus-outline"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href={stock1}
//                   data-lightbox="gallery-medlingos"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock2}
//                   data-lightbox="gallery-medlingos"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock3}
//                   data-lightbox="gallery-medlingos"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock4}
//                   data-lightbox="gallery-medlingos"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock5}
//                   data-lightbox="gallery-medlingos"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="work-box">
//                 <a href={stock} data-lightbox="gallery-smth">
//                   <div className="work-img">
//                     <img src={stock} alt="" className="img-fluid" />
//                   </div>
//                   <div className="work-content">
//                     <div className="row">
//                       <div className="col-sm-8">
//                         <h2 className="w-title">Lorem Ipsum</h2>
//                         <div className="w-more">
//                           <span className="w-ctegory">MERN</span>
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div className="w-like">
//                           <span className="ion-ios-plus-outline"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href={stock1}
//                   data-lightbox="gallery-smth"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock2}
//                   data-lightbox="gallery-smth"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock3}
//                   data-lightbox="gallery-smth"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock4}
//                   data-lightbox="gallery-smth"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock5}
//                   data-lightbox="gallery-smth"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="work-box">
//                 <a href={stock} data-lightbox="gallery-mf">
//                   <div className="work-img">
//                     <img src={stock} alt="" className="img-fluid" />
//                   </div>
//                   <div className="work-content">
//                     <div className="row">
//                       <div className="col-sm-8">
//                         <h2 className="w-title">Lorem Ipsum</h2>
//                         <div className="w-more">
//                           <span className="w-ctegory">
//                             HTML5 CSS3 Bootstrap MERN
//                           </span>
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div className="w-like">
//                           <span className="ion-ios-plus-outline"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href={stock1}
//                   data-lightbox="gallery-mf"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock2}
//                   data-lightbox="gallery-mf"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock3}
//                   data-lightbox="gallery-mf"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock4}
//                   data-lightbox="gallery-mf"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock5}
//                   data-lightbox="gallery-mf"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default Portfolio;


import React from "react";



import OutOfTheDarkImg from "../img/out-of-the-dark.png";
import CubesatImg from "../img/cubesat.png";
import ArtemisImg from "../img/artemis.png";

class Portfolio extends React.Component {
    render() {
    return (
        <section id="projects" className="project-section container box-shadow-full">
            <div className="section-title title-left">
                <h1>Previous Projects</h1>
            </div>
            <div className="project-preview-wrapper">
                <div className="project-preview">
                    <div className="project-title">
                        <h2>NASA Artemis Lunar Lava Tube Competition</h2>
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
                                <i className="ion-social-github"></i>
                            </a>

                        </div>
                        <div className="social-link">
                            <a href="https://youtu.be/R5eFCb2S9to" target="_blank" rel="noopener noreferrer">
                                <i className="ion-social-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-preview">
                    <div className="project-title">
                        <h2>NASA ELaNa19 CubeSat Project DaVinci</h2>
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
                                <i className="ion-social-github"></i>
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="https://www.nasa.gov/image-feature/elana-19-davinci" target="_blank" rel="noopener noreferrer">
                                <i className="ion-android-globe"></i>
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="https://www.youtube.com/watch?v=1lw6E9o82U4" target="_blank" rel="noopener noreferrer">
                                <i className="ion-social-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-preview">
                    <div className="project-title">
                        <h2>Out of the Dark</h2>
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
                                <i className="ion-social-github"></i>
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="https://www.youtube.com/watch?v=4APMlpVHurY" target="_blank" rel="noopener noreferrer">
                                <i className="ion-social-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    }
}
export default Portfolio;
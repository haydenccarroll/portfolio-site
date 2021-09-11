import React from "react";

export default function Contact() {
    return (
        <div className="contact-section">
            <div className="section-title">
                <h1>Contact Me</h1>
            </div>

            <form className="contact-me-form" action="https://formspree.io/f/xdoybney" method="POST">
                <div className="email-subject">
                    <div className="form-element-div">
                        <input type="email" name="user-email" id="user-email" placeholder="Your Email" required/>
                        <label htmlFor="user-email">Your Email</label>
                    </div>
                    <div className="form-element-div">
                        <input type="text" name="email-title" id="email-title" placeholder="Subject" required/>
                        <label htmlFor="email-title">Subject</label>
                    </div>
                </div>

                <div className="form-element-div">
                    <textarea name="email-body" id="email-body" rows="10" placeholder="Message Content" required></textarea>
                    <label htmlFor="email-body">Message Content</label>
                </div>

                <input type="submit" value="Submit" id="submit"/>
            </form>
        </div>
    );
}
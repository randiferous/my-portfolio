import React from 'react';
import resume from "../../assets/daniel_lee_resume_nov_23.pdf"
import nyskyline from "../../assets/ny_9.11.23.jpg"

function Contact() {
    return (
        <div>
            <section className="hero is-small pb-6">
                <div className="hero-body">
                    <p className="is-size-2 has-text-centered has-text-white animate__animated animate__backInRight">
                        Let's connect!
                    </p>
                </div>
            </section>
            <section className="container is-flex is-flex-direction-column my-6 pt-6 pb-6">
                <div className="columns">
                    <div className="column is-7 is-10-mobile is-offset-1-mobile">
                        <h1 id="contact" className="title is-size-2 mt-6 has-text-centered">Contact Info</h1>
                        <div className="column is-flex flex-direction-row is-justify-content-center pt-4 mb-4">
                            <a href={resume} target="_blank" rel="noreferrer">
                                <span className="icon is-large mx-4">
                                    <i className="fa-solid fa-file fa-4x my-auto"></i>
                                </span>
                            </a>
                            <figure className="image is-64x64 mx-3">
                                <a href="https://www.linkedin.com/in/daniel-younghwan-lee/" target="_blank" rel="noreferrer">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                                        alt="Daniel Younghwan Lee LinkedIn" />
                                </a>
                            </figure>
                            <a href="https://www.instagram.com/young1.nyc/" target="_blank" rel="noreferrer">
                                <span className="icon is-large mx-4">
                                    <i className="fa-brands fa-instagram fa-4x my-auto"></i>
                                </span>
                            </a>
                        </div>
                        <div className="column is-flex is-justify-content-center mb-3">
                            <address className="has-text-centered my-auto">
                                <div className="container my-1">
                                    <a className="has-text-dark is-size-4 has-text-weight-semibold"
                                        href="mailto:daniel.younghwan.lee@gmail.com"
                                        target="_blank" rel="noreferrer">daniel.younghwan.lee@gmail.com</a>
                                </div>
                                <p className="has-text-weight-semibold">Click above to send me a message!</p>
                            </address>
                        </div>
                    </div>
                    <div className="column is-5 is-8-mobile is-offset-2-mobile">
                        <img src={nyskyline} alt="NY skyline"></img>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;
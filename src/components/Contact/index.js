import React from 'react';
import resume from "../../assets/Daniel_Y_Lee_Resume.pdf"

function Contact() {
return (
    <section className="container my-6">
        <h1 id="contact" className="title is-size-2 mt-6 has-text-centered">Contact Info</h1>
        <p className="subtitle is-size-4 has-text-centered">Let's Connect!</p>
        <div className="columns">
            <div className="column is-6 is-flex is-justify-content-center">
                <address className="has-text-centered my-auto">
                    <div className="container my-1">
                        <a className="has-text-dark is-size-5 has-text-weight-semibold"
                            href="mailto:daniel.younghwan.lee@gmail.com"
                            target="_blank" rel="noreferrer">daniel.younghwan.lee@gmail.com</a>
                    </div>
                </address>
            </div>
            <div className="column is-6 is-flex flex-direction-row is-justify-content-center">
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
                <figure className="image is-64x64 mx-3">
                    <a href="https://github.com/randiferous" target="_blank" rel="noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="Daniel Younghwan Lee GitHub" />
                    </a>
                </figure>
            </div>
        </div>
    </section>
)
}

export default Contact;
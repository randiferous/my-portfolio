import React from 'react';
import resume from "../../assets/Daniel_Y_Lee_Resume.pdf"

function Contact() {
    return (
        <section className="container my-6 pb-6">
            <h1 id="contact" className="title is-size-2 mt-6 has-text-centered">Contact Info</h1>
            <p className="subtitle is-size-4 has-text-centered">Let's Connect!</p>
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
                    <figure className="image is-64x64 mx-3">
                        <a href="https://github.com/randiferous" target="_blank" rel="noreferrer">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt="Daniel Younghwan Lee GitHub" />
                        </a>
                    </figure>
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

            <p className="is-flex is-justify-content-center is-size-5 has-text-weight-semibold pt-4 pb-2">
                Open to entry-level opportunities in the following roles (but not limited to):
            </p>
            <ul className="column is-flex is-flex-direction-column is-align-items-center is-size-5">
                <li>Junior Web Developer</li>
                <li>Frontend Developer </li>
                <li>Backend Developer</li>
                <li>Junior Software Engineer</li>
                <li>Solutions Engineer</li>
            </ul>
            <p className="is-size-4 mt-5 has-text-centered">
                <strong>Update (Sept. 2022): </strong>Upon completion of my certification, I will join the instructional staff at 2U as a Teaching Assistant for Web Development.
            </p>
        </section>
    )
}

export default Contact;
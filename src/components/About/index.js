import React from 'react';
import marinaEast from "../../assets/marina-east.jpg";

function About() {
    return (
        <div className="mb-6 pb-6">
            <section className="hero is-small is-dark pb-6">
                <div className="hero-body">
                    <p className="is-size-2 has-text-centered animate__animated animate__backInLeft">Nice to meet you!<br />
                        I am a Full-Stack Web Developer</p>
                </div>
            </section>
            <section className="container is-flex is-flex-direction-column">
                <h1 id="about-me" className="title is-size-1 mt-6 mb-5 has-text-centered">About Me</h1>
                <div className="columns mt-1">
                    <div className="column is-3 is-8-mobile is-offset-2-mobile">
                        <img src={marinaEast} alt="hiking"></img>
                    </div>
                    <div className="column is-9 is-10-mobile is-offset-1-mobile">
                        <p className="is-size-4 is-size-5-mobile has-text-centered-mobile">
                            Korean-American born and raised in New York.
                            A practitioner of street-dance, a big sports fan, and a seasoned traveler.
                            Once I began learning how to code and realized how natural it came to me, I never turned back.
                            My experience with the Columbia Engineering Coding Bootcamp has been an enjoyable one, where every
                            piece of new knowledge brings the excitement of new possibilities.
                            There, I have established my skills in front-end and back-end technologies, while honing my ability
                            to collaborate with others.
                            I look forward to the next part of this journey: joining a professional team with whom my work is
                            meaningful and I can continue to grow.
                        </p>
                        <div
                            className="is-flex flex-direction-row is-flex-wrap-wrap is-justify-content-space-around columns mt-1 wow">
                            <div className="column is-1 is-3-mobile">
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                                        alt="mongodb icon" />
                                </figure>
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                                        alt="npm icon" />
                                </figure>
                            </div>
                            <div className="column is-1 is-3-mobile">
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                                        alt="express icon" />
                                </figure>
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                                        alt="mysql icon" />
                                </figure>
                            </div>
                            <div className="column is-1 is-3-mobile">
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        alt="react icon" />
                                </figure>
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
                                        alt="graphql icon" />
                                </figure>
                            </div>
                            <div className="column is-1 is-3-mobile">

                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                        alt="nodejs icon" />
                                </figure>

                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                                        alt="github icon" />
                                </figure>
                            </div>
                            <div className="column is-1 is-3-mobile">
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg"
                                        alt="handlebars icon" />
                                </figure>
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
                                        alt="webpack icon" />
                                </figure>
                            </div>
                            <div className="column is-1 is-3-mobile">
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                        alt="javascript icon" />
                                </figure>
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"
                                        alt="jquery icon" />
                                </figure>
                            </div>
                            <div className="column is-1 is-3-mobile">
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                                        alt="html5 icon" />
                                </figure>
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                                        alt="css3 icon" />
                                </figure>
                            </div>
                            <div className="column is-1 is-3-mobile">
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
                                        alt="bootstap icon" />
                                </figure>
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                                        alt="git icon" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
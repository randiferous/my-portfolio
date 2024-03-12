import React from 'react';
import redBull from "../../assets/redbull.jpg";

function About() {
    return (
        <div className="mb-6 pb-6">
            <section className="hero is-small pb-6">
                <div className="hero-body">
                    <p className="is-size-2 has-text-centered has-text-white animate__animated animate__backInLeft">
                        Nice to meet you!
                    </p>
                </div>
            </section>
            <section className="container is-flex is-flex-direction-column">
                <div className="columns mt-6 pt-6">
                    <div className="column is-5 is-8-mobile is-offset-2-mobile">
                        <img src={redBull} alt="red bull"></img>
                    </div>
                    <div className="column is-7 is-10-mobile is-offset-1-mobile">
                        <h1 id="about-me" className="title is-size-1 mt-6 mb-5 has-text-centered">About Me</h1>
                        <p className="is-size-4 is-size-5-mobile has-text-centered has-text-centered-mobile">
                            Korean-American born and raised in New York.
                            A practitioner of street-dance, big sports fan, and seasoned traveler.
                            Software Developer at Invene, a healthtech company.
                        </p>
                        <div
                            className="is-flex flex-direction-row is-flex-wrap-wrap is-justify-content-space-around columns mt-5 wow">
                            <div className="column is-1 is-3-mobile">
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                                        alt="aws icon" />
                                </figure>
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg"
                                        alt="azure icon" />
                                </figure>
                            </div>
                            <div className="column is-1 is-3-mobile">
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
                                        alt="postgresql icon" />
                                </figure>
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                                        alt="mysql icon" />
                                </figure>
                            </div>
                            <div className="column is-1 is-3-mobile">
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                                        alt="react icon" />
                                </figure>
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                                        alt="nodejs icon" />
                                </figure>
                            </div>
                            <div className="column is-1 is-3-mobile">
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
                                        alt="npm icon" />
                                </figure>
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                                        alt="express icon" />
                                </figure>
                            </div>
                            <div className="column is-1 is-3-mobile">
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
                                        alt="graphql icon" />
                                </figure>
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                                        alt="mongodb icon" />
                                </figure>
                            </div>
                            <div className="column is-1 is-3-mobile">
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                        alt="javascript icon" />
                                </figure>
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                                        alt="css3 icon" />
                                </figure>
                            </div>
                            <div className="column is-1 is-3-mobile">
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg"
                                        alt="flask icon" />
                                </figure>
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-plain-wordmark.svg"
                                        alt="jupyter icon" />
                                </figure>
                            </div>
                            <div className="column is-1 is-3-mobile">
                                <figure className="image is-64x64 my-2 mx-auto">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                                        alt="c# icon" />
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
import React from 'react';
import marinaEast from "../../assets/marina-east.jpg";

function About() {
    return (
        <section className="container is-flex is-flex-direction-column">
            <h1 className="title is-size-1 mt-6 mb-5 has-text-centered">About Me</h1>
            <div className="columns mt-1">
                <div className="column is-3 is-8-mobile is-offset-2-mobile">
                    <img src={marinaEast} alt="hiking"></img>
                </div>
                <div className="column is-9 is-10-mobile is-offset-1-mobile">
                    <p className="is-size-4 mt-2 is-size-5-mobile has-text-centered-mobile">
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
                    <p className="mt-6 is-size-4 is-size-5-mobile has-text-centered-mobile">
                        <strong>Update:</strong> Upon receiving my certification, I will join the instructional staff at 2U as a Teaching Assistant for Web Development.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;
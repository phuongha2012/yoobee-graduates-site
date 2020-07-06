import React, { useEffect } from "react";
import "./About.scss";

const About = () => {
    useEffect(() => {
        document.title = "About - Catalyst";
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <div className="heading-banner about-banner">
                <h1 className="single-heading">About the exhibition</h1>
            </div>
            <div className="about-content">
                <div className="about-section">
                    <div className="about-heading">What is Catalyst?</div>
                    <div className="about-text">
                        <p>
                            Catalyst is a graduate exhibition for students from
                            the Design, Development and Multimedia courses at
                            the Yoobee Colleges Bunny Street campus located in
                            Wellington, New Zealand.
                        </p>
                    </div>
                </div>
                <div className="about-section">
                    <div className="about-heading">
                        Diploma in Web & UX Design
                    </div>
                    <div className="about-text">
                        <p>
                            The internet has revolutionised the way we
                            communicate, shop, bank, play games and share
                            information. The pace of change is accelerating and
                            so too is the demand for talented internet
                            professionals.
                        </p>
                        <p>
                            The Diploma in Web and UX Design gave students the
                            practical skills they need to make their mark in
                            this exciting industry.
                        </p>
                        <p>
                            The students learnt how to apply the principles of
                            visual design and become proficient in the scripting
                            languages that support client-side development. By
                            encouraging creativity and teaching the essentials
                            of web programming and design, this programme set
                            these students on the path to a brilliant career in
                            online media. They graduate with a comprehensive
                            knowledge base and an online portfolio to showcase
                            their skills.
                        </p>
                        <p>
                            This 40-week course consisted of 4 ten-week modules;
                            UX Design, Foundation Coding, Application
                            Development, and Content Management Systems.
                        </p>
                        <p>
                            Graduates of this course receive the New Zealand
                            Diploma in Web Design and Production (Level 6).
                        </p>
                    </div>
                </div>
                <div className="about-section">
                    <div className="about-heading">
                        Diploma in Creative Digital Design
                    </div>
                    <div className="about-text">
                        <p>
                            In this course students learnt to master the skills
                            that help them to combine their creative and digital
                            talents to produce work that is compelling,
                            persuasive ... and seriously cool.
                        </p>
                        <p>
                            They were taught about typography, layout and how to
                            capture and manipulate images and how to channel
                            their knowledge into the creation of epic work, from
                            digital packaging and posters to magazines,
                            brochures, and ads.
                        </p>
                        <p>
                            The completion of this course allowed them to use
                            and understand the practical software, creative and
                            pre-press design skills that the industry is crying
                            out for.
                        </p>
                        <p>
                            With this qualification they aim to launch their
                            careers in any number of exciting areas, such as
                            design agencies, print and pre-press, packaging and
                            finished art, typesetting, magazines and newspapers,
                            advertising, and image retouching.
                        </p>
                        <p>
                            This 40-week course consisted of 4 ten-week modules;
                            Branding, Information Design, Packaging, and Event.
                        </p>
                        <p>
                            Graduates of the course receive the New Zealand
                            Diploma in Digital Media and Design (Level 6).
                        </p>
                    </div>
                </div>
                <div className="about-section">
                    <div className="about-heading">
                        Diploma in 3D Production
                    </div>
                    <div className="about-text">
                        <p>
                            Students learnt to combine artistry with the latest
                            technology and get the skills needed to turn their
                            creative concepts into compelling images that
                            capture the essence of movement, bringing characters
                            and scenes to life.
                        </p>
                        <p>
                            In this course, they learnt techniques in character
                            modelling, rigging, and character animation, and
                            used dynamics and particles, with cloth and fluid
                            simulations, to achieve impressive visual effects.
                            With sophisticated lighting and rendering
                            techniques, they created work with a professional
                            polish.
                        </p>
                        <p>
                            They used industry-based processes throughout the
                            year, from creating conceptual artwork and
                            storyboards to building a showreel that reflects
                            your talent and skills.
                        </p>
                        <p>
                            This 40-week course consisted of 4 ten-week modules;
                            Modelling & Texturing, Technical Studio, Animation
                            and, Visual Effects.
                        </p>
                        <p>
                            Graduates of this course receive the New Zealand
                            Diploma in Animation (Level 6).
                        </p>
                    </div>
                </div>
                <div className="about-section">
                    <div className="about-heading">
                        Diploma in Screen Production
                    </div>
                    <div className="about-text">
                        <p>
                            From pre-production right through to production and
                            post-production, the Diploma in Screen Production
                            has given students the industry-relevant tools to
                            create their own short film or passion project from
                            scratch.
                        </p>
                        <p>
                            Students will have mastered the art of
                            cinematography, sound capture, script writing and
                            storyboarding and well as learnt how to direct,
                            produce, and edit.
                        </p>
                        <p>
                            They will have built skills in sound design, colour
                            grading, composition, and visual effects. Working
                            both in a team and on their own, they had the
                            opportunity to write, direct and shoot dynamic
                            screen productions, then they got to put the
                            finishing touches on their productions by learning
                            the most industry-relevant and cutting-edge
                            post-production techniques.
                        </p>
                        <p>
                            By the end of this programme, they will have
                            completed a self-driven project, curated an online
                            presence and completed a dynamic showreel.
                        </p>
                        <p>
                            This 40-week course consisted of 4 ten-week modules;
                            Commercial Studio, Narrative Studio, VFX Studio, and
                            Production Studio.
                        </p>
                        <p>
                            Graduates of this course receive the New Zealand
                            Diploma in Screen Production (Level 6).
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;

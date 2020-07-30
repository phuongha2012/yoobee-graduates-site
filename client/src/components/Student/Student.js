import React, { useState, useEffect } from "react";
import axios from "axios";
import placeholder from "../../assets/avatar-placeholder.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper";
import NavBarAlt from "../NavBar/NavBarAlt";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

export const Student = ({ match }) => {
    const [student, setStudent] = useState([]);
    const [projects, setProjects] = useState([]);
    SwiperCore.use([Autoplay]);
    const [isUnmounted, setIsUnmounted] = useState(false);
    const {
        name,
        username,
        course,
        email,
        github,
        linkedIn,
        behance,
        instagram,
        siteUrl,
        photoUrl,
        blurb,
        skills,
    } = student;

    useEffect(() => {
        getStudent();
        getProjects();
    }, [match.params]);

    useEffect(() => {
        name
            ? (document.title = `${name} - Catalyst`)
            : (document.title = `Student - Catalyst`);
        window.scroll(0, 0);
    }, [student]);

    const getStudent = async () => {
        let source = axios.CancelToken.source();
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/students/s=${match.params.id}`,
                {
                    cancelToken: source.token,
                }
            );
            if (!isUnmounted) setStudent(response.data);
        } catch (error) {
            if (!isUnmounted) {
                if (axios.isCancel(error)) {
                    console.log(`Request cancelled: ${error.message}`);
                } else {
                    console.log(`Error: ${error.message}`);
                }
            }
        }
        return () => {
            setIsUnmounted(true);
            source.cancel("Cancelling in cleanup");
        };
    };

    const getProjects = async () => {
        let source = axios.CancelToken.source();
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/projects/s=${match.params.id}`,
                {
                    cancelToken: source.token,
                }
            );
            if (!isUnmounted) setProjects(response.data);
        } catch (error) {
            if (!isUnmounted) {
                if (axios.isCancel(error)) {
                    console.log(`Request cancelled: ${error.message}`);
                } else {
                    console.log(`Error: ${error.message}`);
                }
            }
        }
        return () => {
            setIsUnmounted(true);
            source.cancel("Cancelling in cleanup");
        };
    };

    const contacts = document.getElementsByClassName("contact-anchor");
    const image = document.getElementsByClassName("student-image-div");

    switch (course) {
        case "Level 6 Web Development and UX Design":
            for (let i = 0; i < contacts.length; i++) {
                contacts[i].style.textDecorationColor = "#ffe152";
            }
            for (let i = 0; i < image.length; i++) {
                image[i].style.border = "2px solid #ffe152";
            }
            break;
        case "Level 6 Creative Digital Design":
            for (let i = 0; i < contacts.length; i++) {
                contacts[i].style.textDecorationColor = "#ee1e58";
            }
            for (let i = 0; i < image.length; i++) {
                image[i].style.border = "2px solid #ee1e58";
            }
            break;
        case "Level 6 Diploma in 3D Production":
            for (let i = 0; i < contacts.length; i++) {
                contacts[i].style.textDecorationColor = "#00c2f3";
            }
            for (let i = 0; i < image.length; i++) {
                image[i].style.border = "2px solid #00c2f3";
            }
            break;
        case "Level 7 Diploma in Advanced 3D Production":
            for (let i = 0; i < contacts.length; i++) {
                contacts[i].style.textDecorationColor = "#00c2f3";
            }
            for (let i = 0; i < image.length; i++) {
                image[i].style.border = "2px solid #00c2f3";
            }
            break;
        case "Level 6 Diploma in Screen Production":
            for (let i = 0; i < contacts.length; i++) {
                contacts[i].style.textDecorationColor = "#6bbe51";
            }
            for (let i = 0; i < image.length; i++) {
                image[i].style.border = "2px solid #6bbe51";
            }
            break;
        default:
            for (let i = 0; i < contacts.length; i++) {
                contacts[i].style.textDecorationColor = "#fff";
            }
            for (let i = 0; i < image.length; i++) {
                image[i].style.border = "2px solid #fff";
            }
            break;
    }

    return (
        <>
            <NavBarAlt />
            <div className="student-wrapper">
                <div className="heading-banner student-banner">
                    <h1 className="single-heading">{name ? name : username}</h1>
                    <p className="heading-course">{course}</p>
                </div>
                <div className="student-container">
                    {projects ? (
                        projects.length === 0 ? (
                            <h5 className="mt-5 text-center">
                                No projects for this student
                            </h5>
                        ) : (
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                mousewheel
                                keyboard
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                            >
                                {projects.map((project, i) => (
                                    <SwiperSlide key={i}>
                                        <img
                                            className="student-project-img"
                                            src={project.image}
                                            alt=""
                                        />
                                        <h4 className="student-project-title">
                                            {project.title}
                                        </h4>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )
                    ) : (
                        ""
                    )}
                </div>

                <div className="student-blurb">
                    <div className="student-container">{blurb}</div>
                </div>

                <div className="student-details">
                    <div className="student-container">
                        <div className="student-details-row">
                            <div className="skills">
                                <h5 className="student-subheading">Skills</h5>
                                <ul className="student-skills">
                                    {skills
                                        ? skills.map((skill, i) => (
                                              <li
                                                  className="student-skill"
                                                  key={i}
                                              >
                                                  {skill}
                                              </li>
                                          ))
                                        : ""}
                                </ul>
                            </div>
                            <div className="contacts">
                                <h5 className="student-subheading">Contact</h5>
                                <ul className="student-skills">
                                    {github ? (
                                        <li className="student-skill">
                                            <a
                                                className="contact-anchor"
                                                href={github}
                                                target="_blank"
                                                title="GitHub"
                                            >
                                                Github
                                            </a>
                                        </li>
                                    ) : (
                                        ""
                                    )}
                                    {linkedIn ? (
                                        <li className="student-skill">
                                            <a
                                                className="contact-anchor"
                                                href={linkedIn}
                                                target="_blank"
                                                title="LinkedIn"
                                            >
                                                LinkedIn
                                            </a>
                                        </li>
                                    ) : (
                                        ""
                                    )}
                                    {behance ? (
                                        <li className="student-skill">
                                            <a
                                                className="contact-anchor"
                                                href={behance}
                                                target="_blank"
                                                title="Behance"
                                            >
                                                Behance
                                            </a>
                                        </li>
                                    ) : (
                                        ""
                                    )}
                                    {instagram ? (
                                        <li className="student-skill">
                                            <a
                                                className="contact-anchor"
                                                href={instagram}
                                                target="_blank"
                                                title="Instagram"
                                            >
                                                Instagram
                                            </a>
                                        </li>
                                    ) : (
                                        ""
                                    )}

                                    {siteUrl ? (
                                        <li className="student-skill">
                                            <a
                                                className="contact-anchor"
                                                href={siteUrl}
                                                target="_blank"
                                                title="Personal Website"
                                            >
                                                Personal Website
                                            </a>
                                        </li>
                                    ) : (
                                        ""
                                    )}
                                    {email ? (
                                        <li className="student-skill">
                                            <a
                                                className="contact-anchor"
                                                href={"mailto:" + email}
                                                target="_blank"
                                                title="Email"
                                            >
                                                Email
                                            </a>
                                        </li>
                                    ) : (
                                        ""
                                    )}
                                </ul>
                            </div>
                            <div className="student-image-div">
                                <img
                                    className="student-image"
                                    src={photoUrl}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

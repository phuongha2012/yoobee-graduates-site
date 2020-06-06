import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllStudents.scss";
import { StudentCard } from "./StudentCard";

const AllStudents = () => {
    const [allStudents, setAllStudents] = useState([]);
    const [showStudents, setShowStudents] = useState([]);
    const [isUnmounted, setIsUnmounted] = useState(false);
    const [activeItem, setActiveItem] = useState("0");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setShowStudents(allStudents);
    }, [allStudents]);

    const getData = async () => {
        setIsLoading(true);
        let source = axios.CancelToken.source();
        try {
            const response = await axios.get(
                process.env.REACT_APP_BASE_URL + "/students",
                {
                    cancelToken: source.token,
                }
            );
            if (!isUnmounted) {
                setAllStudents(response.data);
                setIsLoading(false);
            }
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

    const changeStudents = (e) => {
        const target = e.target.innerText;
        const index = e.target.attributes[1].value;
        const course = e.target.attributes[2].value;
        if (target === "All") setShowStudents(allStudents);
        else {
            const studentsClicked = allStudents.filter((student) => {
                return student.course === course;
            });
            setShowStudents(studentsClicked);
        }
        setActive(index);
    };

    const setActive = (i) => {
        setActiveItem(i);
    };

    return (
        <>
            <h2 className="jumbotron bg-transparent text-center">Students</h2>
            <ul className="sorting-nav">
                <li
                    className={
                        "sorting-nav-item " +
                        (activeItem === "0" ? "sorting-nav-item--active" : "")
                    }
                    data-index="0"
                    data-course="All"
                    onClick={changeStudents}
                >
                    All
                </li>
                <li
                    className={
                        "sorting-nav-item " +
                        (activeItem === "1" ? "sorting-nav-item--active" : "")
                    }
                    data-index="1"
                    data-course="Level 6 Web Development and UX Design"
                    onClick={changeStudents}
                >
                    Web and UX Design
                </li>
                <li
                    className={
                        "sorting-nav-item " +
                        (activeItem === "2" ? "sorting-nav-item--active" : "")
                    }
                    data-index="2"
                    data-course="Level 6 Creative Digital Design"
                    onClick={changeStudents}
                >
                    Digital Design
                </li>
                <li
                    className={
                        "sorting-nav-item " +
                        (activeItem === "3" ? "sorting-nav-item--active" : "")
                    }
                    data-index="3"
                    data-course="Level 6 3D Production"
                    onClick={changeStudents}
                >
                    3D Production
                </li>
                <li
                    className={
                        "sorting-nav-item " +
                        (activeItem === "4" ? "sorting-nav-item--active" : "")
                    }
                    data-index="4"
                    data-course="Level 6 Screen Production"
                    onClick={changeStudents}
                >
                    Screen Production
                </li>
            </ul>
            {isLoading ? (
                <p>Loading</p>
            ) : (
                <StudentCard students={showStudents} />
            )}
        </>
    );
};

export default AllStudents;

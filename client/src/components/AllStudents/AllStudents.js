import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AllStudents.scss";
import { StudentCard } from "./StudentCard";

const AllStudents = () => {
    const [allStudents, setAllStudents] = useState([]);
    const [showStudents, setShowStudents] = useState([]);
    const [isUnmounted, setIsUnmounted] = useState(false);
    const [activeItem, setActiveItem] = useState("0");

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setShowStudents(allStudents);
    }, [allStudents]);

    const getData = async () => {
        let source = axios.CancelToken.source();
        try {
            const response = await axios.get(
                process.env.REACT_APP_BASE_URL + "/students",
                {
                    cancelToken: source.token,
                }
            );
            if (!isUnmounted) setAllStudents(response.data);
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
        const index = e.target.attributes[1].value;
        const target = e.target.innerText;
        if (target === "All") setShowStudents(allStudents);
        else {
            const studentsClicked = allStudents.filter((student) => {
                return student.course === target;
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
                    onClick={changeStudents}
                >
                    Screen Production
                </li>
            </ul>
            <StudentCard students={showStudents} />
        </>
    );
};

export default AllStudents;

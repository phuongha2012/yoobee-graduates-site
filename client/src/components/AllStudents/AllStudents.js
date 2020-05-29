import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AllStudents.scss";
import { StudentCard } from "./StudentCard";

const AllStudents = () => {
    const [allStudents, setAllStudents] = useState([]);
    const [showStudents, setShowStudents] = useState([]);
    const [isUnmounted, setIsUnmounted] = useState(false);

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
        const target = e.target.innerText;
        if (target === "All") setShowStudents(allStudents);
        else {
            const studentsClicked = allStudents.filter((student) => {
                return student.course === target;
            });
            setShowStudents(studentsClicked);
        }
    };

    return (
        <>
            <h2>Students</h2>
            <button onClick={changeStudents}>All</button>
            <button onClick={changeStudents}>Web and UX Design</button>
            <button onClick={changeStudents}>Digital Design</button>
            <StudentCard students={showStudents} />
        </>
    );
};

export default AllStudents;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllStudents.scss";
import { StudentCard } from "./StudentCard";
import { SortingNav } from "../SortingNav/SortingNav";

const AllStudents = () => {
    const [allStudents, setAllStudents] = useState([]);
    const [showStudents, setShowStudents] = useState([]);
    const [isUnmounted, setIsUnmounted] = useState(false);
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

    const filterCards = (e) => {
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
    };

    return (
        <>
            <div className="jumbotron bg-transparent text-center">
                <h1 className="single-heading">Students</h1>
            </div>
            <SortingNav filter={filterCards} />
            <div className="container">
                <div className="card-grid">
                    {isLoading ? (
                        <p>Loading</p>
                    ) : showStudents ? (
                        showStudents.map((student, i) => (
                            <StudentCard key={i} student={student} />
                        ))
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
};

export default AllStudents;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AllStudents.scss";
import { StudentCard } from "./StudentCard";

const AllStudents = () => {
    const [students, setStudents] = useState([]);
    const [isUnmounted, setIsUnmounted] = useState(false);

    const getData = async () => {
        let source = axios.CancelToken.source();
        try {
            const response = await axios.get("http://localhost:5000/students", {
                cancelToken: source.token,
            });
            if (!isUnmounted) setStudents(response.data);
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

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Link to="/">Home</Link>
            <h2>Students</h2>
            <StudentCard students={students} />
        </>
    );
};

export default AllStudents;

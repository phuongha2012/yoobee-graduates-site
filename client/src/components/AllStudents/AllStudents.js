import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AllStudents.scss";
import { StudentCard } from "./StudentCard";

const AllStudents = () => {
    const [students, setStudents] = useState([]);

    const getData = async () => {
        const response = await axios.get("http://localhost:5000/students");
        setStudents(response.data);
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

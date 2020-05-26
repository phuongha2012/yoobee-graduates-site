import React from "react";
import { Link } from "react-router-dom";
import "./AllStudents.scss";
import { StudentCard } from "./StudentCard";

const AllStudents = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <p>See all our faces</p>
            <StudentCard />
        </div>
    );
};

export default AllStudents;

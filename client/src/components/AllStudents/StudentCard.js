import React from "react";
import { Link } from "react-router-dom";

export const StudentCard = () => {
    return (
        <div>
            I am a student <Link to={`/students/1`}>View my page</Link>
        </div>
    );
};

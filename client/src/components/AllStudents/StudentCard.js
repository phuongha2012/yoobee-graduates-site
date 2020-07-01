import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/avatar-placeholder.png";
import "./AllStudents.scss";

export const StudentCard = ({ student }) => {
    return (
        <div className="card-grid-card card">
            {student.photoUrl ? (
                <img
                    className="card-img-top"
                    src={student.photoUrl}
                    alt={student.username}
                />
            ) : (
                <img
                    className="card-img-top"
                    src={placeholder}
                    alt={student.username}
                />
            )}

            <div className="card-body">
                {student.name ? (
                    <h4 className="card-name">
                        <Link to={`/students/${student._id}`}>
                            {student.name}
                        </Link>
                    </h4>
                ) : (
                    <h4 className="card-name">
                        <Link to={`/students/${student._id}`}>
                            {student.username}
                        </Link>
                    </h4>
                )}
                <p>{student.course}</p>

                <Link
                    className="btn btn-primary"
                    to={`/students/${student._id}`}
                >
                    View my page
                </Link>
            </div>
        </div>
    );
};

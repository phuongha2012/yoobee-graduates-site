import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/avatar-placeholder.png";
import "./AllStudents.scss";

export const StudentCard = ({ student }) => {
    return (
        <div className="card">
            <div
                className={
                    "card-image-div card-image-div-" +
                    (student.course === "Level 6 Web Development and UX Design"
                        ? "web"
                        : student.course === "Level 6 Creative Digital Design"
                        ? "design"
                        : student.course ===
                              "Level 6 Diploma in 3D Production" ||
                          student.course ===
                              "Level 7 Diploma in Advanced 3D Production"
                        ? "3d"
                        : student.course ===
                          "Level 6 Diploma in Screen Production"
                        ? "screen"
                        : "")
                }
            >
                <Link to={`/students/${student._id}`}>
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
                </Link>
            </div>

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
            </div>
        </div>
    );
};

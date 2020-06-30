import React from "react";
import { Link } from "react-router-dom";
import "./AllStudents.scss";

export const StudentCard = ({ students }) => {
    return (
        <div className="card-grid">
            {students
                ? students.map((student) => (
                      <div className="card-grid-card" key={student._id}>
                          {student.name ? (
                              <p>{student.name}</p>
                          ) : (
                              <p>{student.username}</p>
                          )}
                          <p>{student.course}</p>

                          <Link to={`/students/${student._id}`}>
                              View my page
                          </Link>
                      </div>
                  ))
                : ""}
        </div>
    );
};

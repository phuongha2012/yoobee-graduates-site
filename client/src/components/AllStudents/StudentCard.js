import React from "react";
import { Link } from "react-router-dom";

export const StudentCard = ({ students }) => {
    return (
        <div className="row">
            {students
                ? students.map((student) => (
                      <div className="col-3" key={student._id}>
                          {student.name ? (
                              <p>{student.name}</p>
                          ) : (
                              <p>{student.username}</p>
                          )}

                          <Link to={`/students/${student._id}`}>
                              View my page
                          </Link>
                      </div>
                  ))
                : ""}
        </div>
    );
};

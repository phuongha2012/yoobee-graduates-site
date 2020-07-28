import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/avatar-placeholder.png";
import "./AllStudents.scss";

export const StudentCard = ({ student }) => {
    // var elems = document.getElementsByClassName("card-img-top"),
    //     size = elems.length;

    // for (var i = 0; i < size; i++) {
    //     var box = elems[i];
    //     var cw = box.getBoundingClientRect().width;
    //     box.style.height = cw + "px";
    //     console.log(cw, box.getBoundingClientRect().height);
    // }

    return (
        <div className="card">
            {/* <div className="card-image-div"> */}
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
            {/* </div> */}

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

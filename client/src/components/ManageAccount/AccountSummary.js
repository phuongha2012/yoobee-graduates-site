import React from "react";
import { Link } from "react-router-dom";

const AccountSummary = ({ user }) => {
    const details = Object.entries(user).map((entry) => {
        return (
            <div>
                <span>{entry[0]}: </span>
                <span>{entry[1]}</span>
            </div>
        );
    });
    return (
        <div>
            <h3>Account Summary</h3>
            {details}
            <Link to="/account/edit">Edit My Profile</Link>
        </div>
    );
};

export default AccountSummary;

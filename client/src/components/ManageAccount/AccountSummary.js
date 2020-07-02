import React from "react";
import { Link } from "react-router-dom";

const AccountSummary = (props) => {
    return (
        <>
            <h3>Account Summary</h3>
            <Link className="btn btn-warning" to="/account/edit">
                Edit My Profile
            </Link>
        </>
    );
};

export default AccountSummary;

import React from "react";
import { Link } from "react-router-dom";

const AccountSummary = (props) => {
    return (
        <div>
            <h3>Account Summary</h3>
            <Link to='/account/edit'>Edit My Profile</Link>
        </div>
    );
};

export default AccountSummary;

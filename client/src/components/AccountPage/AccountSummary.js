import React from 'react';

const AccountSummary = (props) => {
    const details = Object.entries(props.user).map(entry => {
        return (
            <div>
                <span>{entry[0]}: </span>
                <span>{entry[1]}</span>
            </div>
        )
    });
    return (
        <div>
            <h3>Account Summary</h3>
            {details}
        </div>
    )
}

export default AccountSummary;

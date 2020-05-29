import React from 'react';
import './EditProfilePage.scss';
import avatarPlaceholder from '../../assets/avatar-placeholder.png';

const EditProfilePage = () => {
    return (
        <div 
            className="col-lg-8 col-md-10 col-sm-10 mx-auto">
            <h2 
                className="text-center mb-5 pt-5">
                Edit Profile
            </h2>
            <div 
                className="accountPage__banner"></div>
            <div 
                className="accountPage__memberPhoto"
                style={{backgroundImage: `url(${avatarPlaceholder})`}}>
            </div>
            <div className="text-center mt-2">
                <button>Edit photo</button>
            </div> 
        </div>
    )
}

export default EditProfilePage;

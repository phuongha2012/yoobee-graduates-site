import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './EditProfilePage.scss';
import { UserContext } from '../../contexts/UserContext';
import avatarPlaceholder from '../../assets/avatar-placeholder.png';
import EditProfilePhoto from './EditProfilePhoto';

const EditProfilePage = (props) => {
    const history = useHistory();
    const userContext = useContext(UserContext);
    const [ onPhotoEdit, setOnPhotoEdit ] = useState(false);
    const [ user, setUser ] = useState({
        username: '',
        name: '',
        email: '',
        siteUrl: '',
        course: '',
        blurb: '',
        skills: [],
        github: '',
        behance: '',
        linkedIn: '',
        instagram: ''
    });

    useEffect(() => {
        onLoad();
    }, [userContext.state.user]); //trigger reload if userContext changes

    const onLoad = () => {
        if (!userContext.state.user) {
            history.push('/login');
        } else {
            setUser(userContext.state.user)
        }
    }

    const onTextInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onCheckboxChecked = (e) => {

        let skills = [...user.skills];
        let updatedSkills;

        if (user.skills.includes(e.target.value)) {
            // remove item if skills array contains this value
            updatedSkills = skills.filter(skill => skill !== e.target.value);
        } else {
            // add item if skills array does not contain this value
            skills.push(e.target.value);
            updatedSkills = [...skills];
        }

        setUser({
            ...user,
            skills: updatedSkills
        })    
    }

    const onSelectHandler = (e) => {
        setUser({
            ...user,
            course: e.target.value
        })
    }

    const togglePhotoEditMode = () => {
        setOnPhotoEdit(!onPhotoEdit);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .patch(process.env.REACT_APP_BASE_URL + '/students/s=' + userContext.state.user._id,
                user)
            .then(response => {
                userContext.setAuthenticatedUser(response.data);
            })
    }

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
                style={
                        user.photoUrl 
                        ? {backgroundImage: `url(${user.photoUrl})`}
                        : {backgroundImage: `url(${avatarPlaceholder})`}}>
            </div>
            <div 
                className="text-center mt-2">
                <button
                    onClick={togglePhotoEditMode}>
                    Edit photo
                </button>
            </div> 
            {onPhotoEdit 
                ? <EditProfilePhoto cancelHandler={togglePhotoEditMode}></EditProfilePhoto>
                : ''
            }

            <form 
                className="mt-5"
                onSubmit={handleSubmit}>
                <div 
                    className="form-row">
                    <div 
                        className="form-group col-md-6">
                        <label>Full Name</label>
                        <input 
                            type="text" 
                            className="form-control"
                            name="name"
                            value={user.name} 
                            onChange={onTextInputChange}
                        />
                    </div>
                    <div 
                        className="form-group col-md-6">
                        <label>Username</label>
                        <input 
                            type="text" 
                            className="form-control"
                            name="username"
                            value={user.username}
                            onChange={onTextInputChange}  
                        />
                    </div>
                </div>
                <div 
                    className="form-row">
                    <div 
                        className="form-group col-md-6">
                        <label>Email</label>
                        <input 
                            type="email"
                            name="email" 
                            className="form-control"
                            value={user.email} 
                            onChange={onTextInputChange}
                        />
                    </div>
                    <div 
                        className="form-group col-md-6">
                        <label>Portfolio Link</label>
                        <input 
                            type="text" 
                            name="siteUrl"
                            className="form-control"
                            value={user.siteUrl} 
                            onChange={onTextInputChange}
                        />
                    </div>
                </div>
                <label 
                    className="my-1 mr-2">
                        Course
                </label>
                <select 
                    className="custom-select my-1 mr-sm-2"
                    value={user.course}
                    onChange={onSelectHandler}>
                    <option 
                        selected>
                            Choose...
                    </option>
                    <option 
                        value="Level 6 Creative Digital Design">
                        Level 6 Creative Digital Design
                    </option>
                    <option 
                        value="Level 6 Web Development and UX Design">
                        Level 6 Web Development and UX Design
                    </option>
                    <option 
                        value="Level 6 Diploma in Screen Production">
                        Level 6 Diploma in Screen Production
                    </option>
                    <option 
                        value="Level 6 Diploma in 3D Production">
                        Level 6 Diploma in 3D Production
                    </option>
                    <option 
                        value="Level 7 Diploma in Advanced 3D Production">
                        Level 7 Diploma in Advanced 3D Production
                    </option>
                </select>
                <div className="form-row">
                    <div 
                        className="form-group col">
                        <label 
                            className="mt-3 mb-2 mr-2">
                            Blurb, include your career inspiration
                        </label>
                        <textarea 
                            className="form-control" 
                            rows="3"
                            value={user.blurb} 
                            onChange={onTextInputChange}
                        >   
                        </textarea>
                    </div>
                </div>
                <h4 
                    className="mt-2 mb-3">
                    Highlighted skills
                </h4>
                <div className="form-row justify-content-between">
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={user.skills.includes('Front-end web development')}
                                value="Front-end web development"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                Front-end web development
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={user.skills.includes('Prototyping')}
                                value="Prototyping"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                Prototyping
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={user.skills.includes('Illustrations')}
                                value="Illustrations"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                Illustrations
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={user.skills.includes('Photography')}
                                value="Photography"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                Photography
                            </label>
                        </div>
                    </div>
                    
                </div>
                <div className="form-row justify-content-between">
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={user.skills.includes('Backend web development')}
                                value="Backend web development"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                Backend web development
                            </label>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={user.skills.includes("Branding")}
                                value="Branding"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                Branding
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox"
                                checked={user.skills.includes('Packaging')}
                                value="Packaging"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                Packaging
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={user.skills.includes('Image manipulation')}
                                value="Image manipulation"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                Image manipulation
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-row justify-content-between">
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={user.skills.includes('User experience design')}
                                value="User experience design"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                User experience design
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={user.skills.includes('Typography')}
                                value="Typography"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                Typography
                            </label>
                        </div>
                    </div>
                
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={user.skills.includes('Video editing')}
                                value="Video editing"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                Video editing
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={user.skills.includes('Animation (2D - After Effects)')}
                                value="Animation (2D - After Effects)"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                Animation (2D - After Effects)
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-row justify-content-between">
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={user.skills.includes('Model production')}
                                value="Model production"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                Model production
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={user.skills.includes('3D Modelling')}
                                value="3D Modelling"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                3D Modelling
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={user.skills.includes('Data management')}
                                value="Data management"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                Data management
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={user.skills.includes('CG')}
                                value="CG"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                CG
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-row justify-content-between">
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={user.skills.includes('Commercial studio')}
                                value="Commercial studio"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                Commercial studio
                            </label>
                        </div>
                    </div> 
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={user.skills.includes('VFX Studio')}
                                value="VFX Studio"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                VFX Studio
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={user.skills.includes('Narrative Studio')}
                                value="Narrative Studio"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                Narrative Studio
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={user.skills.includes('Production Studio')}
                                value="Production Studio"
                                onChange={onCheckboxChecked}
                            />
                            <label 
                                className="form-check-label">
                                Production Studio
                            </label>
                        </div>
                    </div>
                </div>
                <h4 className="my-3">Social Media</h4>
                <div 
                    className="form-row">
                    <div 
                        className="form-group col-md-6">
                        <label>Github</label>
                        <input 
                            type="text" 
                            name="github"
                            className="form-control"
                            value={user.github} 
                            onChange={onTextInputChange} 
                        />
                    </div>
                    <div 
                        className="form-group col-md-6">
                        <label>Instagram</label>
                        <input 
                            type="text" 
                            name="instagram"
                            className="form-control" 
                            value={user.instagram} 
                            onChange={onTextInputChange}
                        />
                    </div>
                    <div 
                        className="form-group col-md-6">
                        <label>LinkedIn</label>
                        <input 
                            type="text" 
                            name="linkedIn"
                            className="form-control"
                            value={user.linkedIn} 
                            onChange={onTextInputChange} 
                        />
                    </div>
                    <div 
                        className="form-group col-md-6">
                        <label>Behance</label>
                        <input 
                            type="text" 
                            name="behance"
                            className="form-control" 
                            value={user.behance} 
                            onChange={onTextInputChange}
                        />
                    </div>
                </div>
                <div
                    className="text-center mt-3">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        
    )
}

export default EditProfilePage;

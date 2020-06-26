import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './ManageAccount.scss';
import EditProjectPhoto from './EditProjectPhoto';
import imagePlaceholder from '../../assets/image-placeholder.png';

const AddProject = (props) => {
    const history = useHistory();
    const userContext = useContext(UserContext);
    const [ onPhotoEdit, setOnPhotoEdit ] = useState(false);
    const [ project, setProject ] = useState({
        title: '',
        image: '',
        description: '',
        category: '',
        live: '',
        github: ''
    });

    useEffect(() => {
        onLoad();
    }, [userContext.state.user]); //trigger reload if userContext changes

    const onLoad = () => {
        if (!userContext.state.user) {
            history.push('/login');
        } 
        return;
    }

    useEffect(() => {
        console.log(project);
        console.log(userContext.state.user);
    })

    const onTextInputChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const onSelectHandler = (e) => {
        setProject({
            ...project,
            category: e.target.value
        })
    }

    const togglePhotoEditMode = () => {
        setOnPhotoEdit(!onPhotoEdit);
    }

    const savePhotoUrl = (photoUrl) => {
        setProject({
            ...project,
            image: photoUrl
        })
    }

    return (
        <div 
            className="col-lg-8 col-md-10 col-sm-10 mx-auto">
            <h2 
                className="text-center mb-5 pt-5">
                Add a Project
            </h2>

            <div 
                className="addProjectPage__photo"
                style={
                        project.image 
                        ? {backgroundImage: `url(${project.image})`}
                        : {backgroundImage: `url(${imagePlaceholder})`}}>
            </div>
            <div 
                className="text-center mt-2">
                <button
                    onClick={togglePhotoEditMode}>
                    Add a photo
                </button>
            </div> 
            {onPhotoEdit 
                ? <EditProjectPhoto cancelHandler={togglePhotoEditMode} savePhoto={savePhotoUrl}></EditProjectPhoto>
                : ''
            }

            <form
                className="mt-5"
                onSubmit>
                <div 
                    className="form-row">
                    <div 
                        className="form-group col-md-6">
                        <label>Title</label>
                        <input 
                            type="text" 
                            className="form-control"
                            name="title"
                            value={project.title} 
                            onChange={onTextInputChange}
                        />
                    </div>
                    <div 
                        className="form-group col-md-6">
                        <label 
                            className="my-1 mr-2">
                               Project Category
                        </label>
                        <select 
                            className="custom-select my-1 mr-sm-2"
                            value={project.category}
                            onChange={onSelectHandler}>
                            <option 
                                selected>
                                    Choose...
                            </option>
                            <option 
                                value="Full-stack">
                                Full-stack
                            </option>
                            <option 
                                value="Front-end">
                                Front-end
                            </option>
                            <option 
                                value="UX Design">
                                UX Design
                            </option>
                            <option 
                                value="Photo Manipulation">
                                Photo Manipulation
                            </option>
                            <option 
                                value="Typography">
                                Typography
                            </option>
                            <option 
                                value="Branding">
                                Branding
                            </option>
                            <option 
                                value="Packaging">
                                Packaging
                            </option>
                            <option 
                                value="Photography">
                                Photography
                            </option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div 
                        className="form-group col">
                        <label 
                            className="mt-3 mb-2 mr-2">
                            Description of your project
                        </label>
                        <textarea 
                            className="form-control" 
                            rows="3"
                            name="description"
                            value={project.description} 
                            onChange={onTextInputChange}
                        >   
                        </textarea>
                    </div>
                </div>
                <div 
                    className="form-row">
                    <div 
                        className="form-group col-md-6">
                        <label>View More Link</label>
                        <input 
                            type="text" 
                            name="live"
                            className="form-control" 
                            value={project.live} 
                            onChange={onTextInputChange}
                        />
                    </div>
                    <div 
                        className="form-group col-md-6">
                        <label>Github Repo Link</label>
                        <input 
                            type="text" 
                            name="github"
                            className="form-control" 
                            value={project.github} 
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

export default AddProject;

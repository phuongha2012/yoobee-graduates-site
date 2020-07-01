import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import "./ManageAccount.scss";
import EditProjectPhoto from "./EditProjectPhoto";
import imagePlaceholder from "../../assets/image-placeholder.png";

const EditProject = ( {match} ) => {
    const history = useHistory();
    const userContext = useContext(UserContext);
    const [project, setProject] = useState([]);
    const [isUnmounted, setIsUnmounted] = useState(false);
    const [onPhotoEdit, setOnPhotoEdit] = useState(false);

    useEffect(() => {
        onLoad();
    }, [userContext.state.user]); //trigger reload if userContext changes

    const onLoad = () => {
        if (!userContext.state.user) {
            history.push("/login");
        }
    };

    const getProject = async () => {
        let source = axios.CancelToken.source();
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/projects/p=${match.params.id}`,
                {
                    cancelToken: source.token,
                }            
            );
            if (!isUnmounted) setProject(response.data);
        } catch (error) {
            if (!isUnmounted) {
                if (axios.isCancel(error)) {
                    console.log(`Request cancelled: ${error.message}`);
                } else {
                    console.log(`Error: ${error.message}`);
                }
            }
        }
        return () => {
            setIsUnmounted(true);
            source.cancel("Cancelling in cleanup");
        };
    };

    useEffect(() => {
        getProject();
    }, [match.params]);

    useEffect(() => {
        console.log(project);
    });

    const onTextInputChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value,
        });
    };

    const onSelectHandler = (e) => {
        setProject({
            ...project,
            category: e.target.value,
        });
    };

    const togglePhotoEditMode = () => {
        setOnPhotoEdit(!onPhotoEdit);
    };

    const savePhotoUrl = (photoUrl) => {
        setProject({
            ...project,
            image: photoUrl,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .patch(process.env.REACT_APP_BASE_URL + "/projects/p=" + match.params.id, project)
            .then((response) => {
                console.log(response);
            });
    };



    return (
        <div className="col-lg-8 col-10 mx-auto">
            <h2 className="text-center mb-5 pt-5">Edit Project</h2>

            <div
                className="addProjectPage__photo"
                style={
                    project.image
                        ? { backgroundImage: `url(${project.image})` }
                        : { backgroundImage: `url(${imagePlaceholder})` }
                }
            ></div>
            <div className="text-center mt-2">
                <button onClick={togglePhotoEditMode}>Edit Photo</button>
            </div>
            {onPhotoEdit ? (
                <EditProjectPhoto
                    cancelHandler={togglePhotoEditMode}
                    savePhoto={savePhotoUrl}
                ></EditProjectPhoto>
            ) : (
                ""
            )}

            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={project.title}
                            onChange={onTextInputChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="my-1 mr-2">Project Category</label>
                        <select
                            className="custom-select my-1 mr-sm-2"
                            value={project.category}
                            onChange={onSelectHandler}
                        >
                            <option selected>Choose...</option>
                            <option value="Full-stack">Full-stack</option>
                            <option value="Front-end">Front-end</option>
                            <option value="UX Design">UX Design</option>
                            <option value="Photo Manipulation">
                                Photo Manipulation
                            </option>
                            <option value="Typography">Typography</option>
                            <option value="Branding">Branding</option>
                            <option value="Packaging">Packaging</option>
                            <option value="Photography">Photography</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col">
                        <label className="mt-3 mb-2 mr-2">
                            Description of your project
                        </label>
                        <textarea
                            className="form-control"
                            rows="3"
                            name="description"
                            value={project.description}
                            onChange={onTextInputChange}
                        ></textarea>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>View More Link</label>
                        <input
                            type="text"
                            name="live"
                            className="form-control"
                            value={project.live}
                            onChange={onTextInputChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
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
                <div className="text-center mt-3">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditProject;


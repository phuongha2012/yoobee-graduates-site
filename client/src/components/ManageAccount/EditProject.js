import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import "./ManageAccount.scss";
import EditProjectPhoto from "./EditProjectPhoto";
import imagePlaceholder from "../../assets/image-placeholder.png";
import NavBar from "../NavBar/NavBar";

const EditProject = ({ match }) => {
    const history = useHistory();
    const userContext = useContext(UserContext);
    const [project, setProject] = useState([]);
    const [isUnmounted, setIsUnmounted] = useState(false);
    const [onPhotoEdit, setOnPhotoEdit] = useState(false);

    useEffect(() => {
        onLoad();
    }, [userContext.state.user]); //trigger reload if userContext changes

    useEffect(() => {
        getProject();
    }, [match.params]);

    useEffect(() => {
        document.title = "Register - Catalyst";
        window.scroll(0, 0);
    }, []);

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
            .patch(
                process.env.REACT_APP_BASE_URL +
                    "/projects/p=" +
                    match.params.id,
                project
            )
            .then((response) => {
                history.push("/account");
            });
    };

    const deleteProject = (e) => {
        Swal.fire({
            title: "Are you sure you want to delete this project?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                axios
                    .delete(
                        process.env.REACT_APP_BASE_URL +
                            "/projects/p=" +
                            match.params.id
                    )
                    .then((response) => {
                        history.push("/account");
                        Swal.fire(
                            "Deleted!",
                            "Your file has been deleted.",
                            "success"
                        );
                    });
            }
        });
    };

    return (
        <>
            <NavBar />
            <div className="position-relative bg-dark py-5 mb-3"></div>
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
                    <button
                        className="btn btn-primary"
                        onClick={togglePhotoEditMode}
                    >
                        Edit Photo
                    </button>
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
                            <label className="my-1 mr-2">
                                Project Category
                            </label>
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
                        <button className="btn btn-primary mr-3" type="submit">
                            Submit
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={deleteProject}
                            type="button"
                        >
                            Delete Project
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditProject;

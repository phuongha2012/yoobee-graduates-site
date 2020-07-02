import React, { useState } from "react";
import axios from "axios";

const EditProjectPhoto = (props) => {
    const [file, setFile] = useState("");
    const [url, setUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // generate formData object to send file
        let formData = new FormData();
        formData.append("projectPhoto", file);
        formData.append("projectPhotoUrl", url);

        axios
            .post(
                process.env.REACT_APP_BASE_URL + "/projects/photo/getUrl",
                formData,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            )
            .then((response) => {
                props.savePhoto(response.data);
            })
            .finally(() => {
                props.cancelHandler();
            });
    };

    return (
        <form
            id="addProjectPhotoForm"
            encType="multipart/form-data"
            className="mt-5"
            onSubmit={handleSubmit}
        >
            <div className="form-row mb-3">
                <div className="form-group col-6">
                    <input
                        type="file"
                        name="projectPhoto"
                        className="form-control-file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <small>
                        PNG/JPG files under 500Mb and no space in name
                    </small>
                </div>
                <div className="col-5">
                    <input
                        type="text"
                        className="form-control"
                        name="projectPhotoUrl"
                        placeholder="Or enter photo's url"
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
            </div>
            <div className="form-row float-right">
                <span
                    className="mr-3 btn btn-outline-primary"
                    onClick={props.cancelHandler}
                >
                    Cancel
                </span>
                <button type="submit" className="btn btn-primary float-right">
                    Save
                </button>
            </div>
        </form>
    );
};

export default EditProjectPhoto;

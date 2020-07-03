import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

const EditProfilePhoto = (props) => {
    const userContext = useContext(UserContext);
    const [file, setFile] = useState("");
    const [url, setUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // generate formData object to send file
        let formData = new FormData();
        formData.append("profilePhoto", file);
        formData.append("profilePhotoUrl", url);

        axios
            .patch(
                process.env.REACT_APP_BASE_URL +
                    "/students/s=" +
                    userContext.state.user._id +
                    "/photo/update/",
                formData,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            )
            .then((response) => {
                userContext.setProfilePhoto(response.data.photoUrl);
            })
            .finally(() => {
                props.cancelHandler();
            });
    };

    return (
        <form
            id="editProfilePhotoForm"
            encType="multipart/form-data"
            className="mt-5"
            onSubmit={handleSubmit}
        >
            <div class="form-row mb-3">
                <div class="form-group col-6">
                    <input
                        type="file"
                        name="profilePhoto"
                        className="form-control-file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <small>
                        PNG/JPG files under 500kb and no space in name
                    </small>
                </div>
                <div className="col-5">
                    <input
                        type="text"
                        className="form-control"
                        name="profilePhotoUrl"
                        placeholder="Or enter photo's url"
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
            </div>
            <div className="form-row float-right">
                <span
                    className="mr-3 btn btn-outline-primary"
                    role="button"
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

export default EditProfilePhoto;

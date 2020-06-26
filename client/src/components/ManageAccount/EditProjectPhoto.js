import React, { useState } from 'react';
import axios from 'axios';

const EditProjectPhoto = (props) => {
    const [file, setFile] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // generate formData object to send file
        let formData = new FormData();
        formData.append('projectPhoto', file);
        formData.append('projectPhotoUrl', url);

        axios
            .post(process.env.REACT_APP_BASE_URL + '/projects/photo/getUrl',
                formData,
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } } )
            .then((response) => {
                props.savePhoto(response.data);
            })
            .finally(() => {
                props.cancelHandler(); 
            }) 
    }

    return (
        <form
            id="addProjectPhotoForm" 
            encType="multipart/form-data" 
            className="mt-5"
            onSubmit={handleSubmit}>
            <div class="form-row mb-3">
                <div class="form-group col-6">
                    <input 
                        type="file" 
                        name="projectPhoto" 
                        class="form-control-file" 
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <small>
                        PNG/JPG files under 500Mb and no space in name
                    </small>
                </div>
                <div class="col-5">
                    <input 
                        type="text" 
                        class="form-control" 
                        name="projectPhotoUrl" 
                        placeholder="Or enter photo's url" 
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
            </div>
            <div class="form-row float-right">
                <span 
                    class="mr-3" 
                    onClick={props.cancelHandler}>
                    Cancel
                </span>
                <button 
                    type="submit" 
                    class="button float-right">
                    Save
                </button>
            </div>
        </form>
    )
}

export default EditProjectPhoto;

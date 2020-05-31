import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const EditProfilePhoto = (props) => {
    const userContext = useContext(UserContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.profilePhotoUrl.value)

        let formData = new FormData();

        formData.append('profilePhotoUrl', e.target.profilePhotoUrl.value);

        console.log(formData.get('profilePhotoUrl'));
    }

    return (
        <form
            id="editProfilePhotoForm" 
            enctype="multipart/form-data" 
            className="mt-5"
            onSubmit={handleSubmit}>
            <div class="form-row mb-3">
                <div class="form-group col-6">
                    <input 
                        type="file" 
                        name="profilePhoto" 
                        class="form-control-file" 
                    />
                    <small>
                        PNG/JPG files under 500Mb and no space in name
                    </small>
                </div>
                <div class="col-5">
                    <input 
                        type="text" 
                        class="form-control" 
                        name="profilePhotoUrl" 
                        placeholder="Or enter photo's url" 
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

export default EditProfilePhoto

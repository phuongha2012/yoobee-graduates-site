import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const EditProfilePhoto = (props) => {
    const userContext = useContext(UserContext);
    
    return (
        <form id="editProfilePhotoForm" enctype="multipart/form-data" className="mt-5">
            <div class="flexContainer--row form-row editProfilePhotoFormContainer mb-3">
            <div class="form-group col-6 editProfilePhotoForm__fileWrapper">
                <input type="file" name="profilePhoto" class="form-control-file" id="editProfilePhotoForm__file" />
                <small class="form__infoText">PNG/JPG files under 500Mb and no space in name</small>
            </div>
            <div class="col-5 editProfilePhotoForm__photoUrlWrapper">
                <input type="text" class="form-control" name="profilePhotoUrl" id="editProfilePhotoForm__photoUrl" placeholder="Or enter photo's url" />
            </div>
            </div>
            <div class="flexContainer--row float-right">
            <span class="buttonLink buttonLink--noCap mr-3" onClick={props.cancelHandler}>Cancel</span>
            <button type="submit" class="button float-right">Save</button>
            </div>
        </form>
    )
}

export default EditProfilePhoto

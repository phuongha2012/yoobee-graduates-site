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

            <form 
                className="mt-5">
                <div 
                    class="form-row">
                    <div 
                        class="form-group col-md-6">
                        <label>Full Name</label>
                        <input 
                            type="text" 
                            class="form-control" />
                    </div>
                    <div 
                        class="form-group col-md-6">
                        <label>Username</label>
                        <input 
                            type="text" 
                            class="form-control" />
                    </div>
                </div>
                <div 
                    class="form-row">
                    <div 
                        class="form-group col-md-6">
                        <label>Email</label>
                        <input 
                            type="email" 
                            class="form-control" />
                    </div>
                    <div 
                        class="form-group col-md-6">
                        <label>Portfolio Link</label>
                        <input 
                            type="text" 
                            class="form-control" />
                    </div>
                </div>
                <label 
                    class="my-1 mr-2">
                        Course
                </label>
                <select 
                    class="custom-select my-1 mr-sm-2">
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
                <div class="form-row">
                    <div 
                        class="form-group col">
                        <label class="mt-3 mb-2 mr-2">Blurb, include your career inspiration</label>
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                </div>
                <h4 
                    className="mt-2 mb-3">
                    Highlighted skills
                </h4>
                <div className="form-row justify-content-between">
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                Front-end web development
                            </label>
                        </div>
                    </div>
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                Prototyping
                            </label>
                        </div>
                    </div>
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                Illustrations
                            </label>
                        </div>
                    </div>
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                Photography
                            </label>
                        </div>
                    </div>
                    
                </div>
                <div className="form-row justify-content-between">
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                Backend web development
                            </label>
                        </div>
                    </div>
                    
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                Branding
                            </label>
                        </div>
                    </div>
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                Packaging
                            </label>
                        </div>
                    </div>
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                Image manipulation
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-row justify-content-between">
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                User experience design
                            </label>
                        </div>
                    </div>
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                Typography
                            </label>
                        </div>
                    </div>
                   
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                Video editing
                            </label>
                        </div>
                    </div>
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                Animation (2D - After Effects)
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-row justify-content-between">
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                Model production
                            </label>
                        </div>
                    </div>
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                3D Modelling
                            </label>
                        </div>
                    </div>
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                Data management
                            </label>
                        </div>
                    </div>
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                CG
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-row justify-content-between">
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                Commercial studio
                            </label>
                        </div>
                    </div> 
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                VFX Studio
                            </label>
                        </div>
                    </div>
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                Narrative Studio
                            </label>
                        </div>
                    </div>
                    <div classname="col-sm-6 col-md-3">
                        <div class="form-check">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                value=""
                            />
                            <label 
                                class="form-check-label">
                                Production Studio
                            </label>
                        </div>
                    </div>
                </div>
                <h4 className="my-3">Social Media</h4>
                <div 
                    class="form-row">
                    <div 
                        class="form-group col-md-6">
                        <label>Github</label>
                        <input 
                            type="text" 
                            class="form-control" />
                    </div>
                    <div 
                        class="form-group col-md-6">
                        <label>Instagram</label>
                        <input 
                            type="text" 
                            class="form-control" />
                    </div>
                    <div 
                        class="form-group col-md-6">
                        <label>LinkedIn</label>
                        <input 
                            type="text" 
                            class="form-control" />
                    </div>
                    <div 
                        class="form-group col-md-6">
                        <label>Behance</label>
                        <input 
                            type="text" 
                            class="form-control" />
                    </div>
                </div>
                <div
                    className="text-center mt-3">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditProfilePage;

import React from 'react';
import "../styles/profileForm.scss";

const ProfileForm = () => {
    return (
        <>
            <div className="profileForm">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="profile-heading">Trainer's Details</h4>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="uploadProfile">
                                <img src="https://picsum.photos/250/210" alt="" className="profile-img" />
                                <button className="button"><i class="fal fa-paperclip"></i>Upload Profile</button>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-9 mt-4 mt-lg-0">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div class="floating">
                                        <input id="input__username" class="floating__input" type="text" placeholder="First Name" />
                                        <label for="input__username" class="floating__label" data-content="First Name">
                                            <span class="hidden--visually">First Name</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div class="floating">
                                        <input id="input__username" class="floating__input" type="text" placeholder="Last Name" />
                                        <label for="input__username" class="floating__label" data-content="Last Name">
                                            <span class="hidden--visually">Last Name</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div class="floating">
                                        <input id="input__username" class="floating__input" type="email" placeholder="Email Address" />
                                        <label for="input__username" class="floating__label" data-content="Email Address">
                                            <span class="hidden--visually">Email Address</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div class="floating">
                                        <input id="input__username" class="floating__input" type="text" placeholder="Mobile Number" />
                                        <label for="input__username" class="floating__label" data-content="Mobile Number">
                                            <span class="hidden--visually">Mobile Number</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div class="floating">
                                        <input id="input__username" class="floating__input" type="text" placeholder="Headline" />
                                        <label for="input__username" class="floating__label" data-content="Headline">
                                            <span class="hidden--visually">Headline</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-12">
                            <div class="floating">
                                <textarea id="input__username" class="floating__input floating__textarea" type="text" placeholder="Professional Overview" ></textarea>
                                <label for="input__username" class="floating__label" data-content="Professional Overview">
                                    <span class="hidden--visually">Professional Overview</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h4 className="profile-heading">Link Your data</h4>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div class="floating">
                                <input id="input__username" class="floating__input" type="text" placeholder="Personal Website" />
                                <label for="input__username" class="floating__label" data-content="Personal Website">
                                    <span class="hidden--visually">Personal Website</span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div class="floating">
                                <input id="input__username" class="floating__input" type="text" placeholder="Portfolio Website" />
                                <label for="input__username" class="floating__label" data-content="Portfolio Website">
                                    <span class="hidden--visually">Portfolio Website</span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div class="floating">
                                <input id="input__username" class="floating__input" type="text" placeholder="LinkedIn" />
                                <label for="input__username" class="floating__label" data-content="LinkedIn">
                                    <span class="hidden--visually">LinkedIn</span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div class="floating">
                                <input id="input__username" class="floating__input" type="text" placeholder="Twitter" />
                                <label for="input__username" class="floating__label" data-content="Twitter">
                                    <span class="hidden--visually">Twitter</span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div class="floating">
                                <input id="input__username" class="floating__input" type="text" placeholder="Facebook" />
                                <label for="input__username" class="floating__label" data-content="Facebook">
                                    <span class="hidden--visually">Facebook</span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div class="floating">
                                <input id="input__username" class="floating__input" type="text" placeholder="Other" />
                                <label for="input__username" class="floating__label" data-content="Other">
                                    <span class="hidden--visually">Other</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileForm;

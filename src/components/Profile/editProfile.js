import React, { useState } from 'react';
import NavBar from '../userDashboard/navBar.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import UserDashboard from '../userDashboard/userDashboard.js';
import lang from '../../lang.js';
function EditProfile() {
    const [user, setUser] = useState({ fname: '',password: '', email: '', phone: '' });
    const [showUserProfile, setShowUserProfile] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const togglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleProfilePhotoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log(file);
        }
    };
    return (
        <div>
            <NavBar  handleUserProfileClick={() => setShowUserProfile(!showUserProfile)} />
            <div>
                <UserDashboard />
                <div className="edit-profile-container">
                    <div className="profile-photo-container">
                        <label htmlFor="profile-photo-upload">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Profile Photo"
                                className="user-image"
                            />
                            <input
                                id="profile-photo-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleProfilePhotoUpload}
                                style={{ display: "none" }}
                            />
                        </label>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="input-container-signup">
                            <input
                                type="text"
                                name="fname"
                                id="fname"
                                className="edit-profile-field"
                                placeholder="Full Name"
                                onChange={changeHandler}
                                value={user.fname}
                            />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                className="edit-profile-field"
                                placeholder="Password"
                                onChange={changeHandler}
                                value={user.password}
                            />
                            <span
                                className="edit-show-password-btn"
                                type="button"
                                onClick={togglePassword}
                            >
              <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
              />
            </span>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="edit-profile-field"
                                placeholder="Email"
                                onChange={changeHandler}
                                value={user.email}
                            />
                            <input
                                type="phone"
                                name="phone"
                                id="phone"
                                className="edit-profile-field"
                                placeholder="Phone number"
                                onChange={changeHandler}
                                value={user.phone}
                            />
                        </div>
                    </form>
                    <button className="edit-btn edit-btn-form" onClick={() => setShowUserProfile(false)}>{lang.changesButton}</button>
                </div>
            </div>

        </div>
    );
}

export default EditProfile;

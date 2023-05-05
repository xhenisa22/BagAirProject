import React, { useEffect, useState } from 'react';
import NavBar from '../userDashboard/navBar.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import UserDashboard from '../userDashboard/userDashboard.js';
import {FaExclamationCircle} from "react-icons/fa";
import lang from "../../lang";

function ChangePassword() {
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState({ currentPassword: '',newPassword: '', confirmPassword: '' });
    const [showUserProfile, setShowUserProfile] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [showTooltip, setShowTooltip] = useState(false);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        })
    };

    const togglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleTooltipShow = () => {
        setShowTooltip(true);
    };

    const handleTooltipHide = () => {
        setShowTooltip(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = {};
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
        // Validate currentPassword
        if (!user.currentPassword) {
            errors.currentPassword = "Current password is required";
        }
        if (!user.newPassword) {
            errors.newPassword = "New password is required";
        } else if (!passwordRegex.test(user.newPassword)) {
            errors.newPassword = (
                <div>
                    <p className="error-paragraph">Password must be at least 8 characters long</p>
                    <p className="error-paragraph">Password must contain at least one uppercase letter</p>
                    <p className="error-paragraph">Password must contain at least one number</p>
                    <p className="error-paragraph">Password must contain at least one special character</p>
                </div>
            );
        }else if (user.newPassword === user.currentPassword) {
            errors.newPassword = "New password must be different from current password";
        }

        if (!user.confirmPassword) {
            errors.confirmPassword = "Confirm password is required";
        } else if (user.confirmPassword !== user.newPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log("Current Password:", user.currentPassword);
            console.log("New Password:", user.newPassword);
            console.log("Confirm Password:", user.confirmPassword);

            // Clear form
            setUser({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            });
        }
    };


    return (
        <div>
            <NavBar handleUserProfileClick={() => setShowUserProfile(!showUserProfile)} />
            <div>
                <UserDashboard />
                <form onSubmit={handleSubmit}>
                    <div className="input-container-signup">

                        <input
                            type={showPassword ? "text" : "password"}
                            name="currentPassword"
                            id="currentPassword"
                            className="change-password-field"
                            placeholder="Current Password"
                            onChange={changeHandler}
                            value={user.currentPassword}
                        />
                        {formErrors.currentPassword && (
                            <div className="error-container">
                                <FaExclamationCircle
                                    className="error-icon"
                                    data-tip={formErrors.currentPassword}
                                    onMouseEnter={handleTooltipShow}
                                    onMouseLeave={handleTooltipHide}
                                />
                                {showTooltip && (
                                    <div className="custom-password-tooltip">
                                        {formErrors.currentPassword}
                                    </div>
                                )}
                            </div>
                        )}
                        <input
                            type={showPassword ? "text" : "password"}
                            name="newPassword"
                            id="newPassword"
                            className="change-password-field"
                            placeholder="New Password"
                            onChange={changeHandler}
                            value={user.newPassword}
                        />
                        {formErrors.newPassword && (
                            <div className="error-container">
                                <FaExclamationCircle
                                    className="error-icon"
                                    data-tip={formErrors.newPassword}
                                    onMouseEnter={handleTooltipShow}
                                    onMouseLeave={handleTooltipHide}
                                />
                                {showTooltip && (
                                    <div className="custom-password-tooltip">
                                        {formErrors.newPassword}
                                    </div>
                                )}
                            </div>
                        )}
                        <input
                            type={showPassword ? "text" : "password"}
                            name="confirmPassword"
                            id="confirmPassword"
                            className="change-password-field"
                            placeholder="Confirm Password"
                            onChange={changeHandler}
                            value={user.confirmPassword}
                        />
                        {formErrors.confirmPassword && (
                            <div className="error-container">
                                <FaExclamationCircle
                                    className="error-icon"
                                    data-tip={formErrors.confirmPassword}
                                    onMouseEnter={handleTooltipShow}
                                    onMouseLeave={handleTooltipHide}
                                />
                                {showTooltip && (
                                    <div className="custom-password-tooltip">
                                        {formErrors.confirmPassword}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <button className="change-password-btn change-password-btn-form">{lang.changePassword}</button>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;

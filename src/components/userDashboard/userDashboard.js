import React, { useState } from "react";
import { FaBell, FaUser, FaEnvelope, FaArrowLeft , FaChevronRight , FaPen, FaCog , FaQuestionCircle } from "react-icons/fa";
import userDashboardstyle from '../assets/styles/userDashboard.css';
import editProfile from '../Profile/editProfile.js';
import NavBar from './navBar'
import lang from '../../lang.js';
function UserDashboard() {
    const [showUserProfile, setShowUserProfile] = useState(false);


    const handleUserProfileClick = () => {
        setShowUserProfile(!showUserProfile);
    };

    const handleEditProfileClick = () => {
        window.location.href = '/EditProfile';
    };

    const handleChangePasswordClick = () => {
        window.location.href = '/ChangePassword';
    };
    const handleLogout = () => {
        // code to log the user out
    };

    const handleDelete = () => {
        // code to delete the user's account
    };

    return (
        <div>
            <NavBar handleUserProfileClick={() => setShowUserProfile(!showUserProfile)} />
            {showUserProfile && (
                <div className="user-profile-overlay">
                    <div className="user-profile-container">
                        <div className="return-arrow" onClick={handleUserProfileClick}><FaArrowLeft /></div>
                        <h1 className="profile-heading">Profile</h1>
                        <div className="profile-container">
                            <img src="https://via.placeholder.com/100" alt="Profile Image" className="profile-image"/>
                            <div className="profile-information">
                                <p>Full Name:</p>
                                <p>Email: </p>
                                <p>Phone number: </p>
                            </div>
                        </div>
                        <div className="settings-container">
                            <p className="settings-paragraph">{lang.settingsParagraph}</p>
                            <div className="edit-account">
                                <div className="settings-items">
                                    <FaPen className="edit-icon" />
                                </div>
                                <p>{lang.editParagraph}</p>
                                <FaChevronRight className="setting-icon" onClick={handleEditProfileClick}/>
                            </div>
                            <div className="edit-account">
                                <div className="settings-items">
                                    <FaCog className="edit-icon" />
                                </div>
                                <p>{lang.changePassword}</p>
                                <FaChevronRight className="setting-icon" onClick={handleChangePasswordClick}/>
                            </div>
                            <div className="edit-account">
                                <div className="settings-items">
                                    <FaQuestionCircle className="edit-icon" />
                                </div>
                                <p>{lang.frequentQuestions}</p>
                                <FaChevronRight className="setting-icon"/>
                            </div>
                            <p className="settings-paragraph">Other</p>
                            <p className="logout-paragraph" onClick={handleLogout}>{lang.logoutParagraph}</p>
                            <p className="delete-paragraph" onClick={handleDelete}>{lang.deleteParagraph}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );


}

export default UserDashboard;


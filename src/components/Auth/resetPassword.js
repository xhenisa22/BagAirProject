import React, {useEffect, useState} from 'react';
import password from '../assets/images/passwordLogo.png';
import {FaExclamationCircle} from "react-icons/fa";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {Tooltip as ReactTooltip} from 'react-tooltip';
import {useNavigate} from "react-router-dom";
import loginstyle from '../assets/styles/login.css';
import lang from "../../lang";
const ResetPassword = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [user, setUser] = useState({password: "", confirmPassword: ""});
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleTooltipShow = () => {
        setShowTooltip(true);
    };

    const handleTooltipHide = () => {
        setShowTooltip(false);
    };

    const validateForm = (values) => {
        const errors = {};
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;

        if (!values.password) {
            errors.password = "Password is required!";
        } else if (!passwordRegex.test(values.password)) {
            errors.password = (
                <div>
                    <p className="error-paragraph">Password must be at least 8 characters long</p>
                    <p className="error-paragraph">Password must contain at least one uppercase letter</p>
                    <p className="error-paragraph">Password must contain at least one number</p>
                    <p className="error-paragraph">Password must contain at least one special character</p>
                </div>
            );
        } else if (!values.confirmPassword) {
            errors.confirmPassword = "Confirm Password is required!";
        } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Password do not match";
        }
        return errors;
    };

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(user));
        setIsSubmit(true);
    };

    return (
        <div className="container">
            <header>
                <img src={password} alt="Password logo"/>
                <h1 className="forget-password">{lang.resetPassword}</h1>
                <p className="reset-paragraph">
                    {lang.resetParagraph}
                </p>
            </header>
            <div className="login-form">
                <form onSubmit = {submitHandler} >
                    <div className="input-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="new-password"
                            className="reset-input-field"
                            placeholder="New Password"
                            onChange={changeHandler}
                            value={user.password}
                        />
                        <span
                            className="show-password-icon-btn"
                            type="button"
                            onClick={togglePassword}
                        >
            <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
            />
          </span>
                        {formErrors.password && (
                            <div className="error-container">
                                <FaExclamationCircle
                                    className="error-icon"
                                    data-tip={formErrors.password}
                                    onMouseEnter={handleTooltipShow}
                                    onMouseLeave={handleTooltipHide}
                                />
                                {showTooltip && (
                                    <div className="login-tooltip">
                                        {formErrors.password}
                                    </div>
                                )}
                            </div>
                        )}

                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            id="confirmPassword"
                            className="reset-input-field"
                            placeholder="Confirm Password"
                            onChange={changeHandler}
                            value={user.confirmPassword}
                        />
                        <span
                            className="show-password-icon"
                            type="button"
                            onClick={toggleConfirmPassword}
                        >
            <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
            />
          </span>
                        {formErrors.confirmPassword && (
                            <div className="error-container">
                                <FaExclamationCircle
                                    className="error-icon"
                                    data-tip={formErrors.confirmPassword}
                                    onMouseEnter={handleTooltipShow}
                                    onMouseLeave={handleTooltipHide}
                                />
                                {showTooltip && (
                                    <div className="login-tooltip">
                                        {formErrors.confirmPassword}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <button
                        className="reset-btn reset-btn-form"
                    >
                        {lang.sendButton}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;


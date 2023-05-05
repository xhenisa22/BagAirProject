
import React, { useState, useEffect } from "react";
import passwordImage from '../assets/images/passwordLogo.png';
import loginstyle from '../assets/styles/login.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FaExclamationCircle } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";
import VerificationCode from "./verificationCode";
import lang from "../../lang";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [user, setUser] = useState({
        email: "",
    });

    const handleTooltipShow = () => {
        setShowTooltip(true);
    };

    const handleTooltipHide = () => {
        setShowTooltip(false);
    };

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const validateForm = (values) => {
        const errors = {};
        const emailRegex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Please enter a valid email address!";
        }
        return errors;
    };

    const sendVerificationCode = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(user));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(user);
            // Open the verification code page in a new tab
            window.open("/VerificationCode");
        }
    }, [formErrors]);


    return (
        <div className="container">
            <header>
                <img src={passwordImage} alt="Password logo" />
                <h1 className="forget-password">{lang.sendButton}</h1>
                <p className="first-paragraph">
                    {lang.passwordParagraph}
                </p>
            </header>
            <div className="login-form">
                <form>
                    <div className="input-container">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="input-field-email"
                            placeholder="Email"
                            onChange={changeHandler}
                            value={user.email}
                        />
                        {formErrors.email && (
                            <div className="error-container">
                                <FaExclamationCircle
                                    className="error-icon"
                                    data-tip={formErrors.email}
                                    onMouseEnter={handleTooltipShow}
                                    onMouseLeave={handleTooltipHide}
                                />
                                {showTooltip && (
                                    <div className="login-tooltip">{formErrors.email}</div>
                                )}
                            </div>
                        )}
                    </div>
                    <button
                        className="login-btn login-btn-form"
                        onClick={sendVerificationCode}
                    >
                        {lang.sendButton}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;

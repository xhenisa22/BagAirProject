import React, { useEffect, useState } from "react";
import FormLogo from '../assets/images/formLogo.png';
import registerstyle from '../assets/styles/register.css';
import { useNavigate, NavLink } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { FaExclamationCircle } from "react-icons/fa";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { PhoneNumberUtil } from 'google-libphonenumber';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import lang from "../../lang";

const Register = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });


    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

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

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handlePhoneChange = phone => {
        setUser({ ...user, phone: phone });
    };

    const validateForm = (values) => {
        const errors = {};
        const emailRegex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;


        if (!values.fname) {
            errors.fname = "Full Name is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Please enter a valid email address!";
        }
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
        }
        if (!values.phone) {
            errors.phone = "Phone number is required!";
        }
        return errors;
    };
    const signupHandler = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(user));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(user);
            console.log("Form submitted successfully!");
            navigate("/login", { replace: true });
        }
    }, [formErrors]);

    return (
        <div className="signup-container">
            <header className="signup-header">
                <img src={FormLogo} alt="Sign up logo"/>
                <h1>{lang.registerHeading}</h1>
                <p className="first-paragraph">{lang.registerParagraph}</p>
            </header>
            <div className="signup-form">
                <form>
                    <div className="input-container-signup">
                        <input
                            type="text"
                            name="fname"
                            id="fname"
                            className="input-field-signup"
                            placeholder="Full Name"
                            onChange={changeHandler}
                            value={user.fname}
                        />
                        {formErrors.fname && (
                            <div className="error-container">
                                <FaExclamationCircle
                                    className="error-icon"
                                    data-tip={formErrors.fname}
                                    onMouseEnter={handleTooltipShow}
                                    onMouseLeave={handleTooltipHide}
                                />
                                {showTooltip && (
                                    <div className="custom-tooltip">
                                        {formErrors.fname}
                                    </div>
                                )}
                            </div>
                        )}

                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="input-field-signup"
                            placeholder="Password"
                            onChange={changeHandler}
                            value={user.password}
                        />
                        {formErrors.password && (
                            <div className="error-container">
                                <FaExclamationCircle
                                    className="error-icon"
                                    data-tip={formErrors.password}
                                    onMouseEnter={handleTooltipShow}
                                    onMouseLeave={handleTooltipHide}
                                />
                                {showTooltip && (
                                    <div className="custom-password-tooltip">
                                        {formErrors.password}
                                    </div>
                                )}
                            </div>
                        )}

                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="input-field-signup"
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
                                    <div className="custom-tooltip">
                                        {formErrors.email}
                                    </div>
                                )}
                            </div>
                        )}
                        <PhoneInput
                            country={'us'}
                            value={user.phone}
                            onChange={phone => setUser({ ...user, phone })}
                            // className="input-field-signup"
                            inputClass={'phone-input'}
                        />

                        {formErrors.phone && (
                            <div className="error-container">
                                <FaExclamationCircle
                                    className="error-icon"
                                    data-tip={formErrors.phone}
                                    onMouseEnter={handleTooltipShow}
                                    onMouseLeave={handleTooltipHide}
                                />
                                {showTooltip && (
                                    <div className="custom-tooltip">
                                        {formErrors.phone}
                                    </div>
                                )}
                            </div>
                        )}
                        <label className="terms-span">
                            <input
                                type="checkbox"
                                className="terms-checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <span>I agree to <span className="span-text">Terms of Service</span> and <span className="span-text">Privacy Policy</span></span>
                        </label>
                        <button
                            className="register-btn register-btn-form"
                            onClick={signupHandler}
                            disabled={!isChecked}
                        >
                            {lang.registerHeading}
                        </button>
                    </div>
                </form>
            </div>
            <NavLink to="/login" className="login-page">
                {lang.registerAccount} <span className="span-text"> {lang.loginHeading} </span>
            </NavLink>
        </div>
    );
}
export default Register;

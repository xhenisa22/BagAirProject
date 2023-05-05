import React, { useState, useEffect } from "react";
import FormLogo from '../assets/images/formLogo.png';
import loginstyle from '../assets/styles/login.css';
import { useNavigate, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {FaExclamationCircle} from "react-icons/fa";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import ForgotPassword from "./forgotPassword";
import lang from "../../lang";
const Login = ({ setUserState }) => {
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [user, setUserDetails] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...user,
            [name]: value,
        });
    };

    const handleTooltipShow = () => {
        setShowTooltip(true);
    };

    const handleTooltipHide = () => {
        setShowTooltip(false);
    };

    const togglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const validateForm = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = "Email is required";
        }
        if (!values.password) {
            errors.password = "Password is required";
        }
        return errors;
    };
    const loginHandler = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(user));
        setIsSubmit(true);
    };


    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(user);
            setUserState({
                name: "",
                email: "",
            });
            navigate("/userDashboard", { replace: true });
        }
    }, [formErrors]);
//

    return (
        <div className="container">
            <header>
                <img src={FormLogo} alt="Sign In Logo"/>
                <h1>{lang.loginHeading}</h1>
                <p className="first-paragraph">{lang.loginParagraph}</p>
            </header>
            <div className="login-form">
                <form>
                    <div className="input-container">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="input-field"
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
                                    <div className="login-tooltip">
                                        {formErrors.email}
                                    </div>
                                )}
                            </div>
                        )}

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            className="input-field"
                            placeholder="Password"
                            onChange={changeHandler}
                            value={user.password}
                        />
                        <span
                            className="show-password-btn"
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
                        <NavLink to="/ForgotPassword" target="_blank" className="register-page" className="forgot-password" >{lang.forgetPassword}</NavLink>
                    </div>
                    <button className="login-btn login-btn-form" onClick={loginHandler}>
                        {lang.loginHeading}
                    </button>
                </form>
                <p className="second-paragraph">{lang.loginPar}</p>
                <NavLink to="/register" target="_blank" className="register-page" >{lang.loginCreate}</NavLink>

            </div>
        </div>
    );
}

export default Login;



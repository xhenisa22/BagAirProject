import React, {useEffect, useState} from 'react';
import loginstyle from '../assets/styles/login.css';
import password from '../assets/images/passwordLogo.png';
import {FaExclamationCircle} from "react-icons/fa";
import ResetPassword from "./resetPassword";
import {useNavigate} from "react-router-dom";
import lang from "../../lang";

const VerificationCode = () => {
    const [code, setCode] = useState(['', '', '', '']);
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [user, setUser] = useState({
        VerificationCode: "",
    });

    const handleCodeChange = (event, index) => {
        const inputValue = event.target.value.replace(/[^0-9]/g, '');
        if (inputValue.length <= 1) {
            const newCode = [...code];
            newCode[index] = inputValue;
            setCode(newCode);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    function handleResendCode() {

    }
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(user);
            window.open("/ResetPassword");
        }
    }, [formErrors]);

    const changePassword = (e) => {
        e.preventDefault();

        navigate('/ResetPassword');
    };

    return (
        <div className="container">
            <header>
                <img src={password} alt="Password logo" />
                <h1 className="forget-password">{lang.verificationCode}</h1>
                <p className="first-paragraph">
                    {lang.verificationParagraph}
                </p>
            </header>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <div className="code-container">
                        <input
                            type="text"
                            className="verification-code-input"
                            maxLength={1}
                            value={code[0]}
                            onChange={(e) => handleCodeChange(e, 0)}
                        />
                        <input
                            type="text"
                            className="verification-code-input"
                            maxLength={1}
                            value={code[1]}
                            onChange={(e) => handleCodeChange(e, 1)}
                        />
                        <input
                            type="text"
                            className="verification-code-input"
                            maxLength={1}
                            value={code[2]}
                            onChange={(e) => handleCodeChange(e, 2)}
                        />
                        <input
                            type="text"
                            className="verification-code-input"
                            maxLength={1}
                            value={code[3]}
                            onChange={(e) => handleCodeChange(e, 3)}
                        />
                    </div>
                    <button className="verification-btn verification-btn-form" onClick={changePassword}>
                        Continue
                    </button>
                    <p className="validation-resend">
                        {lang.validationResend}
                        <a href="#" onClick={handleResendCode}>
                            <span className="span-text"> {lang.verficationSpan}</span>
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default VerificationCode;

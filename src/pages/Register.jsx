// src/components/RegisterForm.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';

const RegisterForm = () => {
    return (
        <div className="register-container">
            <div className="register-form">
                <a href="#" className="back-arrow">&larr;</a>
                <h2>Register</h2>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Type here" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Type here" required />

                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" placeholder="Type here" required />

                    <button type="submit" className="login-button">LOGIN</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [validationMessage, setValidationMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setValidationMessage("Full name is required.");
        } else if (!email) {
            setValidationMessage("Email is required.");
        } else if (!pass) {
            setValidationMessage("Password is required.");
        } else {
            // Your registration logic goes here.
            // Save the registration data in local storage
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', pass);

            // Show a success message
            setValidationMessage("Registration successful!");

            // You can also clear the form fields if needed
            setName('');
            setEmail('');
            setPass('');
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    placeholder="Full Name"
                    name="name"
                />
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                />
                <label htmlFor="password">Password</label>
                <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="********"
                    id="password"
                    name="password"
                />
                <button type="submit">Register</button>
            </form>
            {validationMessage && <p className="validation-message">{validationMessage}</p>}
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}

import React, { useState } from "react";
import BackgroundVideo from './assets/background.mp4';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <div className="auth-form-container">
            <video autoPlay muted loop className="background-video">
                <source src={BackgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="login-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email    </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@yahoo.com" id="email" name="email" />
                    <label htmlFor="password">Password     </label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="****************" id="password" name="password" />
                    <button type="submit">Log in</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            </div>
        </div>
    );
}

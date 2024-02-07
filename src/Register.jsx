import React, { useState } from "react";
import BackgroundVideo from './assets/background.mp4';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
            <video autoPlay muted loop className="background-video">
                <source src={BackgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h2>Register</h2>
        <form className="register-form"onSubmit ={handleSubmit}>
            <label htmlFor="name">Username</label>
            <input value={name} onChange={(e) => setName(e.target.value)}type="name" placholder="onokenaxd" id="name" name="name"/>

            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@yahoo.com" id="email" name="email"/>
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="****************" id="password" name="password"/>
            <button type="submit">Log in</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Log in here.</button>
        </div>
    )
}
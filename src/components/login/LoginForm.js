import React from "react";
import './loginform.css'
function LoginForm() {
    return <div>
        <div className="login-form-wrap">
            <h2>Login</h2>
            <form className="login-form">
                <p><input type="text" id="username" name="username" placeholder="Username" required=""></input></p>
                <p><input type="email" id="email" name="email" placeholder="Email Address" required=""></input></p>
               <p> <input type="submit" id="login" value="Login" className="submit-btn"></input></p>
            </form>
            <div id="create-account-wrap">
                <p>Not a member? <a href="#">Create Account</a></p>
            </div>
        </div>
    </div>;
}

export default LoginForm;

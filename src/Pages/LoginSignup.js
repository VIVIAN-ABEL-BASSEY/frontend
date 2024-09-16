import "./CSS/LoginSignup.css"

function LoginSignup(){
    return(
        <div className="LoginSignup">
            <div className="LoginSignup-container">
                <h1>Sign UP</h1>
                <div className="LoginSignup-fields">
                    <input type="text" placeholder="enter your name"/>
                    <input type="email" placeholder="Email address"/>
                    <input type="password" placeholder="password"/>
                </div>
                <button>Continue</button>
                <p className="LoginSignup-login">Already have an account? <span>Login here</span></p>
                <div className="LoginSignup-agreed">
                    <input type="checkbox" name="" id=""/>
                    <p>By continueing, i agree to the terms of use and privacy policy</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup
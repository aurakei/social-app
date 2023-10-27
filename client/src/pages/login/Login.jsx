import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Aura Social</h3>
                <span className="loginDesc">Connect with your allies and the world around you on Aura</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="email" className="loginInput" />
                    <input placeholder="password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a new Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

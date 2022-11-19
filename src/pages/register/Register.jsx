import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Aura Social</h3>
                <span className="loginDesc">Connect with your allies and the world around you on Aura</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                <input placeholder="username" className="loginInput" />
                    <input placeholder="email" className="loginInput" />
                    <input placeholder="password" className="loginInput" />
                    <input placeholder="confirm password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Login into ya' Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

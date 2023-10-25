import "./register.css"

export default function Register() {
  return (
    <form action="/users" method="post">
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Aura Social</h3>
                <span className="loginDesc">Connect with your allies and the world around you on Aura</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                <input placeholder="first Name" name="firstname" className="loginInput" required />
                <input placeholder="last Name" name="lastname" className="loginInput" required />
                <input placeholder="username" name="username" className="loginInput" required />
                <input placeholder="email" name="email" className="loginInput" required />
                <input placeholder="password" type="password" name="password" className="loginInput" required/>
                <input placeholder="confirm password" type="password" name="confirmPassword" className="loginInput" required/>
                <input placeholder="bio" name="bio" type="text" className="loginInput" required/>
                <input placeholder="location" name="location" type="text" className="loginInput" required/>
                <input placeholder="date of birth" name="dateOfBirth" type="date" className="loginInput" required/>

                    <button type="submit" className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Login into ya' Account</button>
                </div>
            </div>
        </div>
    </div>
    </form>
  )
}

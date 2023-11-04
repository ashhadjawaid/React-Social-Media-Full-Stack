import './register.css'

export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">AshhadSocial</h3>
                <span className="loginDesc">Connects with friends and the world around you on AshhadSocial.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Enter your Username..' type="text" className="loginInput" />
                    <input placeholder='Enter your Email..' type="email" className="loginInput" />
                    <input placeholder='Enter your Password..' type="password" className="loginInput" />
                    <input placeholder='Enter your Password again..' type="password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Log into account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

import { useRef } from 'react';
import './login.css'

export default function Login() {
    const email = useRef()
    const password = useRef()

    const handleClick = (e) => {
        e.preventDefault()
        console.log(email.current.value);
    }


  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">AshhadSocial</h3>
                <span className="loginDesc">Connects with friends and the world around you on AshhadSocial.</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder='Enter your Email..' type="email" required className="loginInput" ref={email} />
                    <input placeholder='Enter your Password..' type="password" required minLength= "6" className="loginInput" ref={password}/>
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}

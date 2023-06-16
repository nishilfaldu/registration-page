import React from 'react';
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../assets/css/LoginScreen.css';
import axios from 'axios';


const LoginScreen = (props) => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [loginStatus, setLoginStatus] = useState(false);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const usernameRef = useRef(null);
    const firstnameRef = useRef(null);
    const lastnameRef = useRef(null);

    const signInEmailRef = useRef(null);
    const passwordSignInRef = useRef(null);

    let navigate = useNavigate();

    // const register = (e) => {
    //     e.preventDefault();
    //     console.log(window.location);
    //     axios.post(`http://${window.location.hostname}:5500/login/add`, {
    //         firstName: firstnameRef.current.value,
    //         lastName: lastnameRef.current.value,
    //         emailAddress: emailRef.current.value,
    //         userName: usernameRef.current.value,
    //         password: passwordRef.current.value,
    //     })
    //         .then(res => {
    //             setLoginStatus(!loginStatus);
    //             // console.log('successful');
    //             // navigate('/info');
    //             setUserName(usernameRef.current.value);
    //             setEmail(emailRef.current.value);
    //             setFirstName(firstnameRef.current.value);
    //             setLastName(lastnameRef.current.value);
                
    //         })
    //         .catch(err => console.error(err));
        
    // }

    // const signIn = (e) => {
    //     console.log(signInEmailRef.current.value);
    //     e.preventDefault();
    //     console.log(window.location);
    //     axios.post(`http://${window.location.hostname}:80/login/find`, {
    //         emailAddress: signInEmailRef.current.value
    //     })
    //     .then(res => {
    //         console.log(res.data);
    //         if(res.data.password === passwordSignInRef.current.value){
    //             let u = res.data.userName;
    //             let f = res.data.firstName;
    //             let l = res.data.lastName;
    //             let e = res.data.emailAddress;
    //             setUserName(u);
    //             setEmail(e);
    //             setFirstName(f);
    //             setLastName(l);
    //             console.log(username);

    //             setLoginStatus(!loginStatus);
    //             // navigate('/info');
    //         }
    //         else{
    //             console.log('wrong password hehe!')
    //         }
    //     })
    //     // navigate('/info');
    // }

    function handleSignUp(){
        const container = document.getElementById('loginScreen__container');
        container.classList.add("loginScreen__rightPanel--active")
    }

    function handleSignIn(){
        const container = document.getElementById('loginScreen__container');
        container.classList.remove("loginScreen__rightPanel--active")
    }

    return (
        <div className="loginScreen__container" id="loginScreen__container">
            {!loginStatus ?
        (<div>
            <div className="loginScreen__formContainer loginScreen__signUpContainer">
                <form action="#">
                    <h1>Create Account</h1>
                    <div className="loginScreen__socialsContainer">
                        {/* <a href="#" className="loginScreen__social"><FontAwesomeIcon icon={faGoogle} color={'black'} onClick={handleGoogleAuth}/></a> */}
                        {/* <a href="#" className="loginScreen__social"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#" className="loginScreen__social"><FontAwesomeIcon icon={faFacebookF}/></a>
                        <a href="#" className="loginScreen__social"><FontAwesomeIcon icon={faLinkedin}/></a> */}
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="First Name" ref={firstnameRef}/>
                    <input type="text" placeholder="Last Name" ref={lastnameRef}/>
                    <input type="email" placeholder="Email" ref={emailRef}/>
                    <input type="username" placeholder="Username" ref={usernameRef}/>
                    <input type="password" placeholder="Password" ref={passwordRef}/>
                    <button className="loginScreen__signUp" 
                    // onClick={register}
                    >Sign Up</button>
                </form>
            </div>

            <div className="loginScreen__formContainer loginScreen__signInContainer">
                <form action="#">
                    <h1>Sign In</h1>
                    <div className="loginScreen__socialsContainer">
                        {/* <a href="#" className="loginScreen__social"><FontAwesomeIcon icon={faGoogle} color={'black'} onClick={handleGoogleAuth}/></a> */}
                        {/* <a href="#" className="loginScreen__social"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#" className="loginScreen__social"><FontAwesomeIcon icon={faFacebookF}/></a>
                        <a href="#" className="loginScreen__social"><FontAwesomeIcon icon={faLinkedin}/></a> */}
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" ref={signInEmailRef}/>
                    <input type="password" placeholder="Password" ref={passwordSignInRef}/>
                    <a href="#">Forgot your password?</a>
                    <button className="loginScreen__signIn" 
                    // onClick={signIn}
                    >Sign In
                    </button>
                </form>
            </div>

            <div className="loginScreen__overlayContainer">
                <div className="loginScreen__overlay">
                    <div className="loginScreen__overlayPanel loginScreen__overlayLeft">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="loginScreen__ghost" id="loginScreen__ghostSignIn" onClick={() => {handleSignIn()}}>Sign In</button>
                    </div>
                    <div className="loginScreen__overlayPanel loginScreen__overlayRight">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start your journey with us</p>
                        <button className="loginScreen__ghost" id="loginScreen__ghostSignUp" onClick={() => handleSignUp()}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>) : <div>
                    <h1>Username: {username}</h1>
                    <h1>Email Address: {email}</h1>
                    <h1>First Name: {firstName}</h1>
                    <h1>Last Name: {lastName}</h1>
                </div>
            }
        </div>
    )
}

export default LoginScreen;
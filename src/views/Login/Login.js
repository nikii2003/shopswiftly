import React, { useState,useEffect } from 'react';
import './Login.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import showToast from 'crunchy-toast';
import { Link } from 'react-router-dom';

function Login() {

 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    if (user.email === email && user.password === password) {
      localStorage.setItem("currentuser", JSON.stringify(user));
     showToast(' Login Success!', 'success', 2000)
      window.location.href = "/"
      
    }
    else {
      (showToast('Invalid Email Or Password..?', 'alert', 3000));
    }
  }

  return (
    <>
      <Navbar />
      <div className='login-image'>
       
        <form>
          <div className="form-container d-block mx-auto">
            <h1 className="login-form">Login Form</h1>
            <div className="email">

              <input
                type="text"
                placeholder='Email'
                name="email"
                id="email"
                value={email}
                className='input-box'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="password">

              <input
                type="password"
                placeholder='Password'
                name="password"
                id="password"
                value={password}
                className='input-box'
                onChange={(e) => setPassword(e.target.value)}
              />
             
            </div>

            <button
              type="button"
              className="btn btn-primary d-block mx-auto"
              onClick={handleLogin}
            >
              Login
            </button>
            <p className='text-center'>You have no account <Link to="/signup" className='link-signup'>Sign up</Link></p>
          </div>
        </form>

      </div>
      <Footer />

    </>
  );
}

export default Login;

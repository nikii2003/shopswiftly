import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import showToast from 'crunchy-toast';
import "./Navbar.css"

function Navbar() {
  const [user,setUser]=useState(null)

  useEffect(()=>{
  const userdata= JSON.parse(localStorage.getItem('currentuser'));
  if(userdata){
    setUser(userdata)
  }
  },[])

  const handleLogout = () => {
    localStorage.removeItem('currentuser');
    setUser(null);
    showToast('Logout Succesfully', 'success', 4000);
    window.location.href='/login'
  }
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/signup">Signup</Link>
        <Link className="nav-link" to="/login">Login</Link>

        

        
       <span className='user'>{user ? <p className=''>Hello,{user.name} 😜</p> : <p> Hello,User 😜</p>}</span>
       {user?.name ? (
            <span
              className="navbar-logout"
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/login" ;
              }}
            >

              <span className="btn btn-primary logout " onClick={handleLogout}>Logout</span>

              

            </span>
          ) : null}
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
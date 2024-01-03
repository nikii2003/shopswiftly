import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import  showToast  from "crunchy-toast";
import './Signup.css'
import { Link } from "react-router-dom";

function Signup() {

  useEffect(()=>{
    const storageUser = JSON.parse(localStorage.getItem("user") || `{}` );
    if(storageUser?.email){
       alert("you already register here!");
       window.location.href="/"
    }  
   },[])

  

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [mobile,setMobile]=useState('');
 
  function handleCheck(){
    const user = {
      name,
      email,
      password,
      mobile
    };

    if(!name){
     alert("name is required")
     return;
    }
    if(!email){
    alert("email is required")
    return ;
    }
    if(!password){
      alert("password is required")
      return ;
    }
    if(!mobile){
      alert("mobile is required")
      return ;
    }
    localStorage.setItem("user",JSON.stringify(user));

    showToast('Sign Up Succesfully', 'success', 3000);

    window.location.href="/login"


    setName('');
    setEmail('');
    setPassword('');
    setMobile('');
  
    
    
  }
  return (
    <div>
      <Navbar />
    <form className="form-container d-block mx-auto">
     <input className="input-box" 
     placeholder="Name"
      value={name} 
      type="text"
      onChange={(e)=>{
      setName(e.target.value)
      }}/>

     <input className="input-box"
      placeholder="Email"
      value={email}
      type="email"
      onChange={(e)=>{
      setEmail(e.target.value)
      }}/>

     <input className="input-box" 
     placeholder="Password"
     value={password}
     type="password"
     onChange={(e)=>{
      setPassword(e.target.value)
     }}/>

     <input className="input-box"
      placeholder="Mobile"
      value={mobile}
      type="mobile"
      onChange={(e)=>{
      setMobile(e.target.value)
      }}
      />

     <button  type="button"
     className="btn btn-primary d-block mx-auto" onClick={handleCheck}>SignUp</button>
  <p className="text-center">you already have an account ? <Link to="/login"> Login</Link></p>
    </form>
    </div>
  );
}

export default Signup;

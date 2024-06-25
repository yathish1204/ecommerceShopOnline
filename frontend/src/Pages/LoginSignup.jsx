import React from 'react'
import './CSS/LoginSignup.css'
import { useState } from 'react'

const LoginSignup = () => {

  const [state, setState] = useState('Login');
  const [formData,setFormData] =useState({
    username:'',
    password:'',
    email:''
  })
  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login =async()=>{
    console.log("Login fn executed",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:"POST",
      headers:{
        Accept:"application/form-data",
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>{responseData=data})
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/');
    }else{
      alert(responseData.errors);
    }
  }
  const signup =async()=>{
    console.log("SignUp fn executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:"POST",
      headers:{
        Accept:"application/form-data",
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>{responseData=data})
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/');
    }else{
      alert(responseData.errors);
    }
  }

  return (
    <div className='loginsignup'>
      <div className="login-signup-container">
        <h1>{state}</h1>
        <div className="login-signup-fields">
          {state==='Sign Up'?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' id="" />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler}  type="email" placeholder='Your Email Id' id="" />
          <input name='password' value={formData.password} onChange={changeHandler}  type="password" placeholder='Password'id="" />
          <button onClick={()=>{state==="Login"?login():signup()}}>{state==="Login"?"Login":"Continue"}</button>
          {state==='Sign Up'?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login </span></p>
          :<p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here </span></p>}
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By Continuing , I agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup

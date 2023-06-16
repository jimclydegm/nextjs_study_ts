"use client"

import React from 'react'
import {signIn} from "next-auth/react"


const Login = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {email, password});
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required/>
        <input type="password" placeholder="Password" required/>
        <button>Login</button>
      </form>

      <button onClick={()=>signIn("google")}>
        Login with Google
      </button>
    </div>
  )
}

export default Login
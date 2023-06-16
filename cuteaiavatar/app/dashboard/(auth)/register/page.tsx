"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const Register = () => {

  const [error, setError] = useState(null);

  const router = useRouter();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, password
        })
      })

      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" required/>
        <input type="email" placeholder="Email" required/>
        <input type="password" placeholder="Password" required/>
        <button>Register</button>
      </form>
      {error && <p>Something went wrong</p>}
      <Link href="/dashboard/login">Login with existing account</Link>
    </div>
  )
}

export default Register;
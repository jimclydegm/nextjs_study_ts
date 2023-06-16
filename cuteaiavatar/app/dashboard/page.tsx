"use client"

import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

const Dashboard = () => {

  const session = useSession();
  const router = useRouter();

  if(session.status === "loading"){
    return <p>Loading...</p>
  } 

  if(session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  console.log(session);

  if (session.status === "authenticated") {

    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        Dashboard
      </div>
    )
  }
}

export default Dashboard
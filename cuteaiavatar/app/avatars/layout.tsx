import React from 'react'

const AvatarLayout = ({children}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>These are avatars</h1>
        {children}
    </div>
  )
}

export default AvatarLayout
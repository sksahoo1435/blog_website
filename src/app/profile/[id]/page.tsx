import React from 'react'

const userProfile = ({params}:any) => {
  return (
    <div>
      user Profile
      <p>{params.id}</p>
    </div>
  )
}

export default userProfile

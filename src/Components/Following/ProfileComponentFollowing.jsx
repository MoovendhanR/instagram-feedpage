import React from 'react'
import "./Following.css"

const ProfileComponent = ({id, name,addname,last}) => {
  return (
   <div className="profile-f">
      <div className="profile-container-f">
        <img src={`https://i.pravatar.cc/56?u=1234${id}`} alt="" />
        <div>
            <span>{name}</span><br />
            <span className="grey">{addname}</span>
        </div>
      </div>
      <div className='color'>
       {last}
      </div>
   </div>
  )
}

export default ProfileComponent

import React from 'react'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
const ProfileComponent = () => {
  return (
   <div className="profile-p">
      <div className="profile-container">
        <img src="https://i.pravatar.cc/56?u=123490" alt="" />
        <div>
            <span>Harish_brave . <span className='grey'>2h</span></span><br />
            <span>Original audio</span>
        </div>
      </div>
      <div>
        <MoreHorizOutlinedIcon/>
      </div>
   </div>
  )
}

export default ProfileComponent

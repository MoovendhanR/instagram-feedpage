import React from 'react'
import "./Sidebar.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ExploreOutlined, MenuOutlined } from '@mui/icons-material';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import SendTimeExtensionOutlinedIcon from '@mui/icons-material/SendTimeExtensionOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
const Sidebar = () => {
  return (
    <div className="sidebar">
        <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo" />
        <div className="sidebar-logos">
         <div className="sidebar-icons">
         <div><HomeOutlinedIcon fontSize='large'/></div>
         <div><SearchOutlinedIcon fontSize='large'/></div>
         <div><ExploreOutlined fontSize='large'/></div>
         <div><SlideshowOutlinedIcon fontSize="large"/></div>
         <div><SendTimeExtensionOutlinedIcon fontSize="large"/></div>
         <div><FavoriteBorderOutlinedIcon fontSize='large'/></div>
         <div><ControlPointRoundedIcon fontSize="large"/></div>
         </div>
         <div className="sidebar-span">
         <span> Home</span>
          <span>Search</span>
          <span>Explore</span>
          <span>Reels</span>
          <span>Messages</span>
          <span>Notifications</span>
          <span>Create</span>
          
        </div>
         </div>
         <div className="profile"><img src="https://i.pravatar.cc/20?u=999" alt="profile" />
         <span>Profile</span></div>
         
        <div className="last-logo">
        <div className="more-btn"><MenuOutlined fontSize='large'/><span>More</span>

        </div>
        <div></div>
        </div>
    </div>
  )
}

export default Sidebar

import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
const PostBody = () => {
  return (
   <div className="postbody">
      <div className="post-img">
        <img src="https://plus.unsplash.com/premium_photo-1676409609002-3181a2c8acc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
      </div>
     
      <br />
      <div className="post-b-icons">
        <div>
          <FavoriteBorderOutlinedIcon fontSize='large'/>
          <MapsUgcOutlinedIcon fontSize='large'/>
          <SendOutlinedIcon fontSize='large'/>
          
        </div>
        <div>
            <TurnedInNotOutlinedIcon fontSize='large'/>
        </div>
      
      </div>
      <div className="post-liked">
            <img src="https://i.pravatar.cc/56?u=123447" alt="" />
            <span> Liked by </span>
            <span className="grey"> Sainath_red.e </span>
            <span> and </span>
            <span className="grey"> others </span>
        </div>
        <div className="all-commends">

        <span className="grey" >
        View all 5 comments
        </span>
        </div>
       
        <div className="post-commend">
            <input type="text" placeholder="Add a command" />
            <SentimentSatisfiedAltOutlinedIcon/>
        </div>
         <hr />
   </div>
  )
}

export default PostBody

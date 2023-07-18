import React from 'react'
import "./Post.css"
import Storiecomponent from './Storiecomponent'
import ProfileComponent from './ProfileComponent'
import PostBody from './PostBody'
const Post = () => {
  const storie = [
    { "image": "https://i.pravatar.cc/56?u=1234", "name": "arun" },
    { "image": "https://i.pravatar.cc/56?u=123498","name":"althaf" },
    { "image": "https://i.pravatar.cc/56?u=12341", "name": "kiran" },
    { "image": "https://i.pravatar.cc/56?u=12342","name":"mayan" },
    { "image": "https://i.pravatar.cc/56?u=12345", "name": "naveen" },
    { "image": "https://i.pravatar.cc/56?u=12346", "name": "roshan" },
    { "image": "https://i.pravatar.cc/56?u=12347", "name": "nitish" },
    { "image": "https://i.pravatar.cc/56?u=12348", "name": "sedhu" },
    { "image": "https://i.pravatar.cc/56?u=12349", "name": "solo_fighter" },
    { "image": "https://i.pravatar.cc/56?u=123410", "name": "kavya" },
    { "image": "https://i.pravatar.cc/56?u=123411", "name": "paul_prassanna" },
    { "image": "https://i.pravatar.cc/56?u=123412", "name": "butti" },
    { "image": "https://i.pravatar.cc/56?u=123413", "name": "avinasha" },
    { "image": "https://i.pravatar.cc/56?u=123414", "name": "ranjith" },
    { "image": "https://i.pravatar.cc/56?u=123415", "name": "sathish" }
  ]
 
  
  
  
  
  
  
  
  return (
    <div className='post-main'>
    <Storiecomponent storie={storie}/>
    <ProfileComponent storie={storie}/>
    <PostBody/>
    <ProfileComponent storie={storie}/>
    <PostBody/> <ProfileComponent storie={storie}/>
    <PostBody/> <ProfileComponent storie={storie}/>
    <PostBody/> <ProfileComponent storie={storie}/>
    <PostBody/>
    </div>
  )
}

export default Post

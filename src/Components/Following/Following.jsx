import React from 'react'
import "./Following.css"
import ProfileComponent from './ProfileComponentFollowing'
const Following = () => {
  return (
    <div className="following">
       <ProfileComponent id={"455"} name={"M__vendhan.ft"} addname={"@moovendhanr"} last={"Switch"}/>
       <div className="following-suggestion"> 
        <span className='grey'>Suggested for you</span>
        <span>See All</span>
       </div>
       <ProfileComponent id={"455678"} name={"aswin_rj"} addname={"Followed by paul_prasanna_06 + 2"} last={"Follow"}/>
       <ProfileComponent id={"4522"} name={"itz_me_crazy_boy"} addname={"Suggested for you"} last={"Follow"}/>
       <ProfileComponent id={"45513"} name={"venkey487"} addname={"Follows you"} last={"Follow"}/>
       <ProfileComponent id={"45235"} name={"r_o_l_l_e_x_surya"} addname={"Followed by paul_prasanna_06 + 2"} last={"Follow"}/>
       <ProfileComponent id={"45375"} name={"Sathis_mg"} addname={"Follows you"} last={"Follow"}/>
       <ProfileComponent id={"4755"} name={"nila_sparkle"} addname={"Followed by paul_prasanna"} last={"Follow"}/>
       <div className='last-sec-follow'>
           <span className="grey">
           About
Help
Press
API
Jobs
Privacy
Terms
Locations
Language

English
Meta Verified
           </span>
        <br />
        <br /><br /><br />
           <span className="grey">
           © 2023 INSTAGRAM FROM META

           </span>
       </div>
    </div>
  )
}

export default Following

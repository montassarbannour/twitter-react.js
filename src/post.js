import { Avatar } from '@material-ui/core'
import React from 'react'
import "./post.css"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublicIcon from '@material-ui/icons/Public';
function post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
         <div className="post__avatar">
         <Avatar src="https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/182766356_1321883791542184_6268126030688918526_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7eUbe2CoZacAX9wLbz4&_nc_ht=scontent.ftun7-1.fna&oh=3d7bcad1b0876d6820fe527c300b8834&oe=60C4A54A"/>

         </div>  
         <div className="post__body ">
             <div className="post__header" >
                 <div className="post__headerText" >
                     <h3>
                      Montassar bannour <span className="post__headerSpecial">
                          <VerifiedUserIcon className="post__badge"/>@montabannour
                      </span>
                     </h3>

                 </div>
                 <div className="post__haderDescription">
                  <p> I challenge you to build a twitter clone with react </p>

                 </div>
                 <img src ="https://media.tenor.com/images/70429e79a0472d27b1752129febff2a0/tenor.gif" att=""/>
                 <div className="post__footer">
                     <ChatBubbleOutlineIcon fontSize="small"/>
                     <RepeatIcon fontSize="small"/>
                     <FavoriteBorderIcon fontSize="small"/>
                     <PublicIcon fontSize="small"/>

                 </div>
             </div>
         </div>
            
        </div>
    )
}

export default post

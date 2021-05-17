import React from 'react'
import "./sidebar.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SidebarOption from './sidebarOption';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
 function sidebar() {
    //  let tab=[{
    //     icon:{<HomeIcon>,
    //     text:"aaaaa",
    //     isactive:true
    // },{
    //     icon:{<HomeIcon>,
    //     text:"aaaaa",
    //     isactive:false
    // }]
    return (
        <div className="sidebar">
            {/* twitter icon */}
            <TwitterIcon className="sidebar_twitterIcon" />


            {/* sidebarOption */}
            
            <SidebarOption active Icon={<HomeIcon></HomeIcon>} text="Accueil" />    
            <SidebarOption  Icon={<SearchIcon/>}  text="Explore" />
            <SidebarOption  Icon={<NotificationsIcon/>} text="Notifications" />
            <SidebarOption Icon={<MailOutlineIcon/>} text="Messages" />
            <SidebarOption Icon={<BookmarkIcon/>} text="Signets" />
            <SidebarOption Icon={<ListAltIcon/>} text="listes" />
            <SidebarOption Icon={<PermIdentityIcon/>}  text="Profil" />
            <SidebarOption Icon={<MoreHorizIcon/>} text="Plus" />


           

           
            {/* button-> tweet */}
        
           <Button variant="outlined" className="sidebar_tweet" fullWidth >tweet</Button>
        </div>

    )
}
export default sidebar;

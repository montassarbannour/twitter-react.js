import React from 'react'
import "./widgets.css"
// import {
//     TwitterTimeLineEmbed,
//     TwitterShareButton,
//     TwitterTweetEmbed,
// } from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

function widgets() {
    return (
        <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon"/>
          <input placeholder="Recherche Twitter" type="text"/>

        </div>
        <div className="widgets__widgetContainer">
            <h2>Tendances pour vous</h2>

        </div>
            
        </div>
    )
}

export default widgets

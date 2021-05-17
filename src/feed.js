import React from 'react'
import "./feed.css"
import TweetBox from "./tweetBox"
import Post from "./post"

function feed() {
    return (
        <div className="feed">
            {/* header */}  
            <div className="feed__header" >
                <h2>Accueil</h2>
            </div>  
            

            {/* tweetBox */}
            <TweetBox/>
            

            {/* Post */}
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
        </div>
    )
}

export default feed

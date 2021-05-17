import React from 'react';
import "./tweetBox.css"
import { Avatar,Button } from '@material-ui/core';


function tweetBox() {
    return (
        <div className="tweetBox">
            <from>
                <div className="tweetBox__input" >
                    <Avatar src="https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/182766356_1321883791542184_6268126030688918526_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7eUbe2CoZacAX9wLbz4&_nc_ht=scontent.ftun7-1.fna&oh=3d7bcad1b0876d6820fe527c300b8834&oe=60C4A54A"/>
                    <input placeholder="Quoi de neuf ?" type="text"/>
                </div>
                <Button className="tweet__tweetButton">tweet</Button>
            </from>
            
        </div>
    )
}

export default tweetBox

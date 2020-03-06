import React, {useEffect, useState} from "react";
import axios from "axios"


const getUserProfilePic = async()=> {
    try{
        let res = await axios.get("http://localhost:3001/users/1")
       return res.data.payload.user_pic

    } catch (err){
        debugger
        console.log(err)
    }
}

const displayProfilePic = ()=> {
        let propic = getUserProfilePic()
        
        return (
            <div className = "profilePic">
                <img src = {propic}></img>
                <button>Create a post</button>
            </div>
        )

}



const getFeeds = async()=> {
    try{
        let res = await axios.get("http://localhost:3001/posts")
        debugger


    } catch (err){
        debugger
        console.log(err)
    }
}

const displayFeed = () => {
    let feeds = getFeeds()
    return (
        <div className = "feeds">
            <img src = {feeds}></img>
        </div>
    )
}






const display = () => {
    const profile = displayProfilePic();
    debugger
    return (
        <div>
            Home
            {profile}
        </div>
    )
}

export default display;
import React,{useEffect, useState} from "react";
import axios from 'axios'
// import addPost from "../helpme/addPost"
import CreatePost from "../createPost"

const UserDisplay =({userInfo})=>{

     const [homeFeed, setHomeFeed] = useState([])

    const updateFeed = async () => {
        try {
            let res = await axios.get("http://localhost:3001/posts/")
            debugger
            setHomeFeed(res.data.payload)

        }catch(err){
            console.log(err)
            setHomeFeed([])
        }
    }
  debugger
   
        return(
            <div className = "UserInfo" key = {userInfo.id}>
                <h2>{userInfo.username}</h2>
               <img src = {userInfo.user_pic} className="userPic" alt=""></img>
               <CreatePost updateFeed={updateFeed}/>
           </div>

        )
  
  

}

export default UserDisplay


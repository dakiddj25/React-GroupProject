import React,{useEffect, useState} from "react";
import axios from 'axios'
// import addPost from "../helpme/addPost"

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
           </div>

        )
  
  

}

export default UserDisplay


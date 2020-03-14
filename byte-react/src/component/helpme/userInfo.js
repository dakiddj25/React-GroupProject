import React from "react"
import addPost from "../helpme/addPost"
import CreatePost from "../createPost"

const UserDisplay =({userInfo})=>{
  debugger
   
        return(
            <div className = "UserInfo" key = {userInfo.id}>
                <h2>{userInfo.username}</h2>
               <img src = {userInfo.user_pic} alt=""></img>
               <CreatePost/>
           </div>

        )
  
  

}

export default UserDisplay


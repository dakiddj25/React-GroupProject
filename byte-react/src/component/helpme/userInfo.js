import React from "react"
// import addPost from "../helpme/addPost"

const UserDisplay =({userInfo})=>{
        return(
            <div className = "UserInfo" key = {userInfo.id}>
                <h2>{userInfo.username}</h2>
               <img src = {userInfo.user_pic} className="userPic" alt=""></img>
           </div>

        )
  
  

}

export default UserDisplay


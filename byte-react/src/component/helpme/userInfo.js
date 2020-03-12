import React, {useEffect, useState} from "react"
import addPost from "../helpme/addPost"

const UserDisplay =({userInfo})=>{
  debugger
   
        return(

            <div className = "UserInfo" key = {userInfo.id}>
                <h2>{userInfo.username}</h2>
               <img src = {userInfo.user_pic}></img>
              
               <form onSubmit = {addPost}>
                   <input name= "caption" type = "text" placeholder = "caption"/>
                   <input name = "image" type= "file" accept = "image/*"/>
                   <button>submit</button>
               </form>
           </div>

        )
  
  

}
export default UserDisplay

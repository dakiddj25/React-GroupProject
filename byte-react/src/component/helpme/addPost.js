import React, {useEffect, useState} from "react";
import axios from "axios"



const addPost = () => {
    
const [userProfilepic , setUserProfilePic] = useState("")
const [allFeeds , setallFeeds] = useState([])



const postPicture = async(e)=> {
    try{
        let user = localStorage.getItem("currentUser")
        let res = await axios.post("http://localhost:3001/users/${user}",{id:, user_id:, pictures:, captions:});
    
  
    } catch (err){
        debugger
        console.log(err)
    }
 }

 const createPost = () => { // create a component for search bar
    return (
        <div>
        <form onSubmit = {postPicture}>
            <input type = "text" placeholder = "caption"/>
            <input type= "file" accept = "image/*"/>
            <button>submit</button>
        </form>
        </div> //Button onClick runs the searchbar component
    )
 }

}

export default addPost;
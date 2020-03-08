import React, {useEffect, useState} from "react";
import axios from "axios"



const Home = () => {
    
const [userProfilepic , setUserProfilePic] = useState("")
const [allFeeds , setallFeeds] = useState("")

const getUserProfilePic = async()=> {
    try{
        let user = localStorage.getItem("currentUser")
        let res = await axios.get("http://localhost:3001/users/2")
       return res.data.payload.user_pic // set it in the state
  
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
        let user = localStorage.getItem("currentUser")
        let res = await axios.get("http://localhost:3001/posts") 
       return res.data.payload// set it in the state
  
    } catch (err){
        debugger
        console.log(err)
    }
 }
  
 const displayFeeds = ()=> {
        let propic = getFeeds()
       propic.map((feeds) => {

           return (
               <div className = "FeedPage">
                   <img src = {feeds}></img>
               </div>
           )
       })
  
 }

 const searchBar = () => { // create a component for search bar
    return (
        <div>
            <input type = "text" placeholder = "Search by HashTag"/>
            <button /> 
        </div> //Button onClick runs the searchbar component
    )
 }

 let userInfor = displayProfilePic()

    return (
        <div>
            Home
            {userInfor}
        </div>
    )
}

export default Home;
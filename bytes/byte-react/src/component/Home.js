import React, {useEffect, useState} from "react";
import axios from "axios"
import "../css/home.css"



const Home = () => {
    
const [userProfilepic , setUserProfilePic] = useState("")
const [allFeeds , setallFeeds] = useState([])

const getUserProfilePic = async()=> {
    try{
        let user = localStorage.getItem("currentUser")
        let res = await axios.get("http://localhost:3001/users/2")

        setUserProfilePic(res.data.payload.user_pic)

       // set it in the state
  
    } catch (err){
        debugger
        console.log(err)
    }
 }
  
 const displayProfilePic = ()=> {
    getUserProfilePic()

        let propic = userProfilepic
    //    debugger
        return (
            <div className = "profilePic">
                <img src = {propic}></img>
                <br/>
                <button>Create a post</button>
            </div>
        )
  
 }

 const getFeeds = async()=> {
    try{
        let user = localStorage.getItem("currentUser")
        let res = await axios.get("http://localhost:3001/posts") 
        setallFeeds(res.data.payload)// set it in the state
        // debugger
    } catch (err){
        debugger
        console.log(err)
    }
 }
  useEffect(() => {
    getFeeds()
  },[])

 const displayFeeds = allFeeds.map(feed => {
// debugger
let caption = feed.captions
           return (
               <div className = "FeedPage" key = {feed.id}>
               <h1>feed</h1>
                   <img src = {feed.pictures}></img>
                   <label>{feed.captions}</label>
               </div>
           )
       })
  
 

 const searchBar = () => { // create a component for search bar
    return (
        <div>
            <input type = "text" placeholder = "Search by HashTag"/>
            <button>Search</button>
        </div> //Button onClick runs the searchbar component
    )
 }

 let userInfor = displayProfilePic()
 let feedspage = displayFeeds
 let search = searchBar()

    return (
        <div className="homepage">
            
            {userInfor}
            {feedspage}
            {search}
        </div>
    )
}

export default Home;
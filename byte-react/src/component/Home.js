import React, {useEffect, useState} from "react";
import axios from "axios"
import "../css/home.css"
import addPost from './helpme/addPost'



const Home = () => {
    
const [userProfilepic , setUserProfilePic] = useState("")
const [allFeeds , setallFeeds] = useState([])

const getUserProfilePic = async()=> {
    try{
        let user = localStorage.getItem("currentUserID")
        
        let res = await axios.get(`http://localhost:3001/users/${user}`)

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
                
                <form onSubmit = {addPost}>
                    <input name= "caption" type = "text" placeholder = "caption"/>
                    <input name = "image" type= "file" accept = "image/*"/>
                    <button>submit</button>
                </form>
                {/* <button onClick = {addPost}>Create a post</button> */}
            </div>
        )
  
 }

 const getFeeds = async()=> {
    try{
        let user = localStorage.getItem("currentUserID")
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

           return (
               <>
               <h1>feed</h1>
                   <img src = {feed.pictures}></img>
                   <label>{feed.captions}</label>
              </>
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
            <div className = "FeedPage" > {feedspage} </div>
            {search}
        </div>
    )
}

export default Home;
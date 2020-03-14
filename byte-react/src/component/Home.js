import React, {useEffect, useState} from "react";
import axios from "axios"
// import { useInputs, fetchData } from "../utility/InputHooks";
import SearchBar from "./helpme/hashtagSearch"
import FeedIndex from "./helpme/feedIndex"
import UserDisplay from "./helpme/userInfo"
import CreatePost from "../component/createPost";
import "../css/home.css"
import image from './../css/Assets/bytesLogo.jpg';

const Home = () => {


    const [posts, setPosts ] = useState([])
    const [userInfo, setUserInfo ] = useState([])

    
    const getPosts = async (str="") =>{
        try{
            let res = await axios.post("http://localhost:3001/hashtag/getHashtag", {hashtag: str})
            setPosts(res.data.payload)
        }catch(err){
            console.log(err)
            setPosts([])
        }
    }
    
    useEffect(()=>{
        getPosts()
    },[])

    const handleSubmit = (str) =>  {getPosts(str)}

    const getUserProfile = async () =>{
        try{
            let user = localStorage.getItem("currentUserID")
           
            let res = await axios.get(`http://localhost:3001/users/${user}`)
      
            setUserInfo(res.data.payload)
           // set it in the state
         } catch (err){ 
            console.log(err)
            setUserInfo([])

        }
     }

     useEffect(()=>{
        getUserProfile()
    },[])
     
    

    return(
        <div className="home-container">
         <div className="Logo">
                <img src={image} className="picture" alt="" />
            </div>
            <div className="Banner"></div>
            <div className="UserInfo">
                <UserDisplay userInfo = {userInfo} />
            </div>
            <div className="UserFeed">
                <div>
                    <h2>Create a Post</h2>
                    <CreatePost/>
                </div>
                <div>
                    <h2>Search by Hastag</h2>
                    <SearchBar handleSubmit={handleSubmit} />
                </div>
                <div className="HomeFeed">
                    <FeedIndex posts={posts} />
                </div>
            </div>
        </div>

    )
} 

export default Home;
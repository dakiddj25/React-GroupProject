import React, {useEffect, useState} from "react";
import axios from "axios"
import { useInputs, fetchData } from "../utility/InputHooks";
import SearchBar from "./helpme/hashtagSearch"
import FeedIndex from "./helpme/feedIndex"
import UserDisplay from "./helpme/userInfo"
import "../css/home.css"
import addPost from './helpme/addPost'

const Home = () => {


    const [posts, setPosts ] = useState([])
    const [userInfo, setUserInfo ] = useState([])
    
    const getPosts = async (str="") =>{
        try{
            let res = await axios.post("http://localhost:3001/hashtag/getHashtag", {hashtag: str})
            setPosts(res.data.payload)
            debugger
        }catch(err){
            console.log(err)
            setPosts([])
        }
    }
    
    useEffect(()=>{
        getPosts()
    },[])
    const handleSubmit = (str)=>{getPosts(str)}

    const getUserProfile = async () =>{
        try{
            let user = localStorage.getItem("currentUserID")
           
            let res = await axios.get(`http://localhost:3001/users/${user}`)
      
            setUserInfo(res.data.payload)
            debugger
           // set it in the state
         } catch (err){
            debugger
            console.log(err)
            setUserInfo([])

        }
     }

     useEffect(()=>{
        getUserProfile()
    },[])
     
    

    return(
        <>
        <UserDisplay userInfo = {userInfo} />
        <SearchBar handleSubmit={handleSubmit} />
        <FeedIndex posts={posts} />
        </>

    )
} 

export default Home;
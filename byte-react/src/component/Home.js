import React, {useEffect, useState} from "react";
import axios from "axios"
import { useInputs, fetchData } from "../utility/InputHooks";
import SearchBar from "./helpme/hashtagSearch"
import FeedIndex from "./helpme/feedIndex"
import "../css/home.css"

const Home = () => {

    const [posts, setPosts ] = useState([])
    
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
    const handleSubmit = (str)=>{getPosts(str)}
    

    return(
        <>
        <SearchBar handleSubmit={handleSubmit}/>
        <FeedIndex posts={posts}/>
        </>
    )
} 

export default Home;
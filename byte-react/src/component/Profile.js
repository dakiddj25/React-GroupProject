import React,{useEffect, useState} from "react";
import axios from 'axios';
import "../css/Profile.css";
import image from './../css/Assets/bytesLogo.jpg';
import { useInputs } from "../utility/InputHooks";


const Profile = () => {

    const [info, setInfo] = useState([])
    const [feed, setFeed] = useState([])
    const captions = useInputs("")
    const [pictures, setPictures] = useState("")
    const users_id= useInputs("")




    // const fetchUserInfo = async () => {
    //     let user = localStorage.getItem("currentUser");
    //     debugger

    const fetchUserInfo = async () => {
        // let user = localStorage.getItem("currentUser")
        try {
            let res = await axios.get(`http://localhost:3001/users/1`)
            setInfo(Object.values(res.data))
        } catch(err){
            console.log(err)
        }
    } 
        useEffect(() => {
            fetchUserInfo()
        }, [])

    const fetchUsersFeed = async () => {

        try {
            let res = await axios.get("http://localhost:3001/posts/1") 
            setFeed(res.data.payload)

        }catch(err){
            console.log(err)
        }
    }

        useEffect(() => {
            fetchUsersFeed()
        }, [])

    const handleSubmit = async (e) => {
        setPictures(e.target.file)
        debugger
        try {
            let res = await axios.post("http://localhost:3001/posts/", {
                id: users_id.value,
                pictures: pictures.value,
                caption: captions.value,
            })

        }catch(err){
            console.log(err)
            debugger
        }
    }

    
    let  showInfo = info.map(user => {
        return (
        <div><h2>{user.username}</h2>
        <img src={user.user_pic} alt="" />
        <h3>{user.firstname}{user.lastname}</h3>
        <p>{user.email}</p>
        </div>
        )
    })
    const showFeed = feed.map(post => {
        return <div><h3>{post.id}</h3><img src={post.pictures} alt=""/><p>{post.captions}</p></div>
    })


    return (
        <div className="grid-container">
            <div className="Logo">
                <img src={image} alt="" className="picture"/>
            </div>
            <div className="Banner"></div>
            <div className="UserInfo">
                {showInfo}
            </div>
            <form onSubmit ={handleSubmit} className="UserFeed">
                <input type="text" placeholder="Enter A Caption!" {...captions}/>
                <input type="file" accept="image/*"/>
                <button> Post Bytes </button>
                {showFeed}
            </form>
            <div class="Empty"></div>
        </div>

    )
}


export default Profile;

import React,{useEffect, useState} from "react";
import axios from 'axios';
import "../css/Profile.css";
import image from './../css/Assets/bytesLogo.jpg';
import CreatePost from "./createPost"
import EditProfile from "./editProfile"
const Profile = () => {
    const [info, setInfo] = useState({})
    const [feed, setFeed] = useState([])
    const user_id= localStorage.getItem("currentUserID");

    const fetchUserInfo = async () => {
        try {
            let res = await axios.get(`http://localhost:3001/users/${user_id}`)
            setInfo(res.data.payload)
        } catch(err){
            console.log(err)
            setInfo([])
        }
    }
        useEffect(() => {
            fetchUserInfo()
        }, [])
    const fetchUsersFeed = async () => {
        debugger
        try {
            let res = await axios.get(`http://localhost:3001/posts/${user_id}`);
            setFeed(res.data.payload)
        }catch(err){
            console.log(err)
            setFeed([])
        }
    }
        useEffect(() => {
            fetchUsersFeed()
        }, [])
    const  showInfo = (obj) =>{
        return (
            <div>
                <h2>{obj.username}</h2>
                <img src={obj.user_pic} alt="" />
                <h3>{obj.firstname} {obj.lastname}</h3>
                <p>{obj.email}</p>
            </div>
        )
    }
    const showFeed = feed.map(post => {
        return <div><img src={post.pictures} className="postPicture" alt=""/><p>{post.captions}</p></div>
    })
    return (
        <div className="profile-container">
            <div className="Logo">
                <img src={image} alt="" className="picture"/>
            </div>
            <div className="Banner"></div>
            <div className="UserInfo">
                {showInfo(info)}
                <EditProfile fetchUserInfo= {fetchUserInfo}/>
            </div>
            <div className="UserFeed">
                <CreatePost fetchUsersFeed={fetchUsersFeed}/>
                <div className="Feed">
                    {showFeed}
                </div>
            </div>
        </div>
    )
}
export default Profile;
import React,{useEffect, useState} from "react";
import Image from './Image'
import axios from 'axios';
import "../css/Profile.css";
import image from './../css/Assets/bytesLogo.jpg';

const Profile = () => {

    const [userInfo, setUserInfo] = useState("")
    const [feed, setFeed] = useState([])



    // const fetchUserInfo = async () => {
    //     let user = localStorage.getItem("currentUser");
    //     debugger

    // const fetchUserInfo = async () => {
    //     let user = localStorage.getItem("currentUser")
    //     debugger
    //     try {
    //         let res = await axios.get("http://localhost:3001/users/1")
    //         debugger
    //         setUserInfo(res.data.payload)
    //         debugger
    //     } catch(err){
    //         console.log(err)
    //     }
    // } 
    //     useEffect(() => {
    //         fetchUserInfo()
    //     }, [])

    const fetchUsersFeed = async () => {

        try {
            let res = await axios.get("http://localhost:3001/posts") 
            debugger
            setFeed(res.data.payload)
            debugger


        }catch(err){
            console.log(err)
        }
    }

        useEffect(() => {
            fetchUsersFeed()
        }, [])


    // const showInfo = userInfo.map(info => {
    //     return <div><h2>{info.userName}</h2><img src={info.user_pic} /><h3>Full Name: {info.firstName} {info.lastName}</h3><p>Email : {info.email}</p></div>
    // })
    const showFeed = feed.map(post => {
        debugger
        return <div><h3>{post.id}</h3><Image filepath={post.pictures} /><p>{post.captions}</p></div>
    })


    return (
        <div className="grid-container">
            <div className="Logo">
                <img src={image} alt="" className="picture"/>
            </div>
            <div className="Banner"></div>
            <div className="UserInfo">
                <div className="userName">
                    UserName
                </div>
                <div className="profilePic">
                    ProfilePic
                </div>
                <div className="userInfo">
                    <label>
                    Full Name:
                    Email:
                    </label>
                </div>
            </div>
            <form className="UserFeed">
                <input type="text" placeholder="Enter A Caption!"/>
                <input type="file" accept="image/*" />
                <button> Submit </button>
            </form>
            <div class="Empty"></div>
        </div>

    )
}


export default Profile;

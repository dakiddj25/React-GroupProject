import React,{useEffect, useState} from "react";
import Image from './Image'
import axios from 'axios';
import "../css/Profile.css";
import image from './../css/Assets/bytesLogo.jpg';

const Profile = () => {

    const [info, setInfo] = useState([])
    const [feed, setFeed] = useState([])



    // const fetchUserInfo = async () => {
    //     let user = localStorage.getItem("currentUser");
    //     debugger

    const fetchUserInfo = async () => {
        let user = localStorage.getItem("currentUser")
        try {
            let res = await axios.get("http://localhost:3001/users/1")
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

    
    let  showInfo = info.map(user => {
        return (
        <div><h2>{user.username}</h2>
        <img src={user.user_pic} />
        <h3>{user.firstname} {user.lastname}</h3>
        <p>{user.email}</p>
        </div>
        )
    })
    const showFeed = feed.map(post => {
        return <div><h3>{post.id}</h3><img src={post.pictures} /><p>{post.captions}</p></div>
    })


    return (
        <div className="grid-container">
            <div className="Logo">
                <img src={image} alt="" className="picture"/>
            </div>
            <div className="Banner"></div>
            <div className="UserInfo">
                {/* <div className="userName">
                    UserName
                </div>
                <div className="profilePic">
                    ProfilePic
                </div>
                <div className="userInfo">
              
                </div> */}
                {showInfo}
            </div>
            <form className="UserFeed">
                <input type="text" placeholder="Enter A Caption!"/>
                <input type="file" accept="image/*" />
                <button> Submit </button>

                {showFeed}
            </form>
            <div class="Empty"></div>
        </div>

    )
}


export default Profile;

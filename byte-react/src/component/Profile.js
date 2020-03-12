import React,{useEffect, useState} from "react";
import axios from 'axios';
import "../css/Profile.css";
import image from './../css/Assets/bytesLogo.jpg';
import { useInputs } from "../utility/InputHooks";
import CreatePost from "./CreatePost"
import Popup from 'reactjs-popup';


const Profile = () => {

    const [info, setInfo] = useState({})
    const [feed, setFeed] = useState([])


    const fetchUserInfo = async () => {
        // let user = localStorage.getItem("currentUser")
        try {
            let res = await axios.get(`http://localhost:3001/users/1`)
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
        try {
            let res = await axios.get("http://localhost:3001/posts/1") 
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
                <h3>{obj.firstname}{obj.lastname}</h3>
                <p>{obj.email}</p>
            </div>
        )
    }

    const showFeed = feed.map(post => {
        debugger
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
                <Popup trigger={<button className="Pop">Change Profile</button>} position="right center">
                    <div>
                        <form>
                            <label>
                            Edit Info
                            </label>
                            <input type="text" placeholder="Change Username"/>
                            <input type="file"/>
                            <input type="submit"/>
                         </form>
                    </div>
                </Popup>
            </div>
            <div className="UserFeed">
                <CreatePost />
                <div className="Feed">
                    {showFeed}
                </div>
            </div>
        </div>

    )
}


export default Profile;

import React,{useEffect, useState} from "react";
import axios from 'axios';
import "../css/Profile.css";
import image from './../css/Assets/bytesLogo.jpg';
import { useInputs } from "../utility/InputHooks";
import Popup from 'reactjs-popup';


const Profile = () => {

    const [info, setInfo] = useState([])
    const [feed, setFeed] = useState([])
    const captions = useInputs("")
    const [pictures, setPictures] = useState("")
    const users_id= useInputs("")




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




    
    const showInfo = info.map(user => {
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

    const handleEditClick = () => {

    }


    return (
        <div className="grid-container">
            <div className="Logo">
                <img src={image} alt="" className="picture"/>
            </div>
            <div className="Banner"></div>
            <div className="UserInfo">
                {showInfo}
                <di
                <Popup trigger={<button>Change Profile</button>} position="right center">
                    <div>
                        <form>
                            <label>
                            Edit Info
                            </label>
                            <input type="text" placeholder="Change Username"/>
                            <input type="file"/>
                            <input type="submit"/>
                        </form>
                    </div>
                </Popup>
            </div>
            <form className="UserFeed" >
                <input type="text" placeholder="Enter A Caption!" {...captions}/>
                <input type="file" accept="image/*"/>
                <button> Post Bytes </button>
                {showFeed}
            
                <button onClick={handleEditClick}>Edit</button>
            </form>
            <div class="Empty"></div>
        </div>

    )
}


export default Profile;

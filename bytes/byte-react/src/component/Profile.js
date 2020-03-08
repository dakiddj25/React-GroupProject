import React,{useEffect, useState} from "react";
import axios from 'axios';
import "../css/Profile.css";
import image from './../css/Assets/bytesLogo.jpg';

const Profile = () => {

    const [userName, setUserName] = useState("")
    const [userFullName, setUserFullName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [pic, setPic] = useState("")


    const fetchUserInfo = async () => {
        let user = localStorage.getItem("currentUser");
        debugger
        try {
            let res = await axios.post(`http://localhost:3001/users/${user}`);
            setUserName(res.data)
            debugger
        } catch(err){
            console.log(err)
        }
    } 
        useEffect(() => {
            fetchUserInfo()
        }, [])

    // const getUserFeed => 

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

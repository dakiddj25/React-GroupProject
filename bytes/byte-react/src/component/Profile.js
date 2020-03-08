import React,{useEffect, useState} from "react";
import axios from 'axios';

const Profile = () => {

    const [userName, setUserName] = useState("")
    const [userFullName, setUserFullName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [pic, setPic] = useState("")


    const fetchUserInfo = async () => {
        let user = localStorage.getItem("currentUser")
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
        <>
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
        <form>
        <input type="text" placeholder="Enter A Caption!"/>
        <input type="file" accept="image/*" />
        <button> Submit </button>
        </form>
        
        </>
    )
}


export default Profile;

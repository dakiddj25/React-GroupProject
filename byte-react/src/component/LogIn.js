import React, {useEffect, useState} from "react";
import { useInputs, useStateWithLocalStorage } from "../utility/customHooks";
import image from './../css/Assets/bytesLogo.jpg'
import image2 from '../css/Assets/group.jpg'
import {Link} from "react-router-dom"
import axios from "axios"

const LogIn = () => {
    localStorage.clear();
    const userName = useInputs("")
    const password = useInputs("")
    
const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
        debugger
        axios.post("http://localhost:3001/username",{
                userName: userName,
                password: password
            })
            localStorage.setItem("currentUser", userName.value)
            window.location.href = "./"
        }catch(err){
            console.log(err)
        }
    }



    return (
        <div className="grid-container">
            <div className="GroupPicture">
            <img src={image2} alt="" className="group"/>
            </div>

             <div className="login">
             <form className="logInPage" onSubmit = {handleSubmit}>
                <img src={image} alt="" className="logo"/> 
                <h1> Log In To Byte Into Your Friend's Culinary Arts. </h1>
                <input type="text" placeholder="User Name" required {...userName}/>
                <input type="text" placeholder="Password" type="password" required {...password}/>
               
                <input type="submit" className="submit"/>
            
                
                
            </form>

             </div>
        </div>
    )
}

export default LogIn;
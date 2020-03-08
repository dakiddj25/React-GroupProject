import React, {useEffect, useState} from "react";
import { useInputs, useStateWithLocalStorage } from "../utility/customHooks";
import image from './../css/Assets/bytesLogo.jpg'
import image2 from '../css/Assets/group.jpg'
import {Link} from "react-router-dom"

const LogIn = () => {
    localStorage.clear();
    const userName = useInputs("")
    const password = useInputs("")

    return (
        <div class="grid-container">
            <div class="GroupPicture">
            <img src={image2} alt="" className="group"/>
            </div>

             <div class="SignUp">
             <form className="signUp">
                <img src={image} alt="" className="logo"/> 
                <h1> Log In To Byte Into Your Friend's Culinary Arts. </h1>
                <input type="text" placeholder="User Name" required {...userName}/>
                <input type="text" placeholder="Password" type="password" required {...password}/>
                <h5>Upload Profile Picture</h5>
                <Link to="/">
                <input type="submit" className="submit"/>

                </Link>
                
            </form>

             </div>
        </div>
    )
}

export default LogIn;
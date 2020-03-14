import React from "react";
import { useInputs } from "../utility/InputHooks";
import image from './../css/Assets/bytesLogo.jpg';
import image2 from '../css/Assets/group.jpg';
import {Link} from "react-router-dom";
import "../css/LogIn.css";
import axios from "axios";

const LogIn = () => {
    localStorage.clear();
    const userName = useInputs("")
    const password = useInputs("")
    
const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
        debugger
        let res = await axios.post("http://localhost:3001/users/login",{
                userName: userName.value,
                password: password.value
            })
            console.log(res)
            localStorage.setItem("currentUserID", res.data.user.id)
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
                <h2> Log In To Byte Into Your Friend's Culinary Arts. </h2>
                <input type="text" placeholder="User Name" required {...userName}/>
                <input type="password" placeholder="Password" required {...password}/>
                <input type="submit" className="submit"/> 
            </form>
            <form className="user">
                <Link to="/SignUp" className="button">Don't Have An Account? Click Here</Link>
            </form>

             </div>
        </div>
    )
}

export default LogIn;
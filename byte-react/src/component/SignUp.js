import React from "react";
import { useInputs } from "../utility/InputHooks";

import image from './../css/Assets/bytesLogo.jpg'
import image2 from '../css/Assets/group.jpg'
  import {Link} from "react-router-dom"
import "../css/SignUp.css"
import axios from "axios";
// import LogIn from "./LogIn";

const SignUp = () => {
    localStorage.clear();
    const firstName = useInputs("")
    const lastName = useInputs("")
    const userName = useInputs("")
    const password = useInputs("")
    const email = useInputs("")
    const userPic = useInputs("")
    
    const handleSubmit = async (e)=>{
        debugger
        e.preventDefault()
        try{
            let res = await axios.post("http://localhost:3001/users", {
              firstName: firstName.value,
              lastName: lastName.value,
              userName: userName.value,
              password: password.value,
              email: email.value,
              user_pic: userPic.value
          })
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

             <div className="SignUp">
             <form onSubmit={handleSubmit} className="signUp">
                <img src={image} alt="" className="logo"/>
               
                <h1> Sign Up To Try Your Next Byte </h1>
                <input type="text" placeholder="First Name" required {...firstName}/>
                <input type="text" placeholder="Last Name" required {...lastName}/>
                <input type="text" placeholder="User Name" required {...userName}/>
                <input type="password" placeholder="Password" required {...password}/>
                <input type="text" placeholder="Email" required {...email}/>
                <h5>Upload Profile Picture</h5>
                <input type="file" accept ="image/*" {...userPic} />
                <input type="submit" className="submit"/>
            </form>
            <form className="user">
                <Link to="/login" className="button">Have An Account? Click Here</Link>
            </form>

             </div>
        </div>
       
    )
}

export default SignUp
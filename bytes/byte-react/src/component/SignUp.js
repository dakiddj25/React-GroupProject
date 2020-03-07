import React from "react";
import { useInputs } from "../utility/customHooks";
import { useHistory } from "react-router-dom";
import "../css/SignUp.css"
import axios from "axios";

const SignUp = () => {
    const firstName = useInputs("")
    const lastName = useInputs("")
    const userName = useInputs("")
    const password = useInputs("")
    const email = useInputs("")
    const userPic = useInputs("")

    const history = useHistory()
    
    const handleSubmit = async (e)=>{
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
          debugger
        }catch(err){
            console.log(err)
        }
    }




    return (
        <div className="body">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="First Name" required {...firstName}/>
                <input type="text" placeholder="Last Name" required {...lastName}/>
                <input type="text" placeholder="User Name" required {...userName}/>
                <input type="text" placeholder="Password" type="password" required {...password}/>
                <input type="text" placeholder="Email" required {...email}/>
                <input type="text" placeholder="Upload Photo" {...userPic}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default SignUp
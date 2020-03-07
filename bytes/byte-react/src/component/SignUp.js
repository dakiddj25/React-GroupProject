import React from "react";
import { useInputs } from "../utility/customHooks";
import { useHistory } from "react-router-dom";
import "../css/SignUp.css"

const SignUp = () => {
    const firstName = useInputs("")
    const lastName = useInputs("")
    const userName = useInputs("")
    const password = useInputs("")
    const email = useInputs("")
    const userPic = useInputs("")

    const history = useHistory()
    




    return (
        <div className="body">
            <form>
                <input type="text" placeholder="First Name" required {...firstName}/>
                <input type="text" placeholder="Last Name" required {...lastName}/>
                <input type="text" placeholder="User Name" required {...userName}/>
                <input type="text" placeholder="Password" type="password" required {...password}/>
                <input type="text" placeholder="Email" required {...email}/>
                <input type="text" placeholder="Upload Photo" {...userPic}/>
            </form>
        </div>
    )
}

export default SignUp
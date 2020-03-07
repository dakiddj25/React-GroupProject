import React from "react";
import useInputs from "../utility/customHooks"
import {useHistory} from react-router-dom

const SignUp = () => {
    const firstName = useInputs("")
    const lastName = useInputs("")
    const userName = useInputs("")
    const password = useInputs("")
    const email = useInputs("")
    const userPic = useInputs("")

    const history = useHistory()
    




    return (
        <div>
            <Form onSubmit = {handleSubmit}>
            <label>
            Enter First Name: <input type="text" {...firstName}/>
            Enter Last Name: <input type="text" {...lastName}/>
            Enter User Name: <input type="text" {...userName}/>
            Create A Password: <input type="text" {...password}/>
            Enter Emai; : <input type="text" {...email}/>
            Choose a Profile Picture  <input type="text" {...userPic}/>


            </label>





            </Form>
        </div>
    )
}

export default SignUp
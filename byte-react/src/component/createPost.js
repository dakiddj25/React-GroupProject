import React, {useState} from 'react';
import axios from 'axios';
import { useInputs } from "../utility/InputHooks";

const CreatePost = () => {
    const caption = useInputs("")
    const [picture, setPicture] = useState("")

    // const user_id= localStorage.getItem("currentUser")



    const handlePostSubmit = async () => {
        debugger 
        try {
        let res = await axios.post(`http://localhost:3001/posts`, {
                user_id: 1,
                pictures: picture,
                captions: caption
        })
        debugger 
        }catch(err){
            console.log(err)
        }
    } 

    return (
            <form onSubmit ={handlePostSubmit} className="UserFeed">
                <input type="text" placeholder="Enter A Caption!" {...caption}/>
                <input type="file"  />
                <button type="submit" > Post Bytes </button>
            </form>
    )
}

export default CreatePost;
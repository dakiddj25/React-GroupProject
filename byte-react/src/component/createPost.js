import React, {useState} from 'react';
import axios from 'axios';
import { useInputs } from "../utility/InputHooks";

const CreatePost = () => {
    const caption = useInputs("")
    const [picture, setPicture] = useState("")

    // const user_id= localStorage.getItem("currentUser")

    const uploadPicture = async (e) => {
        const file = e.target.file[0];
        const formData = new FormData(); 
        
        formData.append('upload_preset', file);
        let res = await axios.get("https://res.cloudinary.com/dbhncpu02/image/upload/");
        setPicture()

        
    }


    const handlePostSubmit = async (e) => {
        e.preventDefault()
        debugger 
        try {
        let res = await axios.post(`http://localhost:3001/posts`, {
                user_id: 1,
                pictures: picture.value,
                captions: caption.value
        })
        debugger 
        }catch(err){
            console.log(err)
        }
    } 

    return (
            <form onSubmit ={handlePostSubmit} className="UserFeed">
                <input type="text" placeholder="Enter A Caption!" {...caption}/>
                 <input type="file" accept="image/*" handle={uploadPicture} />
                <button type="submit" > Post Bytes </button>
            </form>
    )
}




export default CreatePost;
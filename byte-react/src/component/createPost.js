import React, {useState} from 'react';
import axios from 'axios';
import { useInputs } from "../utility/InputHooks";


const CreatePost = ({fetchUsersFeed}) => {
    const caption = useInputs("")
    const [picture, setPicture] = useState("")
    const [loading, setLoading] = useState(false)
    const [arrCaption, setArrCaption] = useState([])
    const [newHash, setNewHash] = useState("")

    const user_id= localStorage.getItem("currentUserID")
    const uploadPicture = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0])
        data.append('upload_preset', 'BytesReact');
        data.append('cloud_name', 'dbhncpu02')
        setLoading(true)
        let res = await fetch("https://api.cloudinary.com/v1_1/dbhncpu02/image/upload", {
            method: 'Post',
            body: data
            }
        )
        const file = await res.json()
        setPicture(file.secure_url)
        setLoading(false)
    }
    const handlePostSubmit = async (e) => {
        e.preventDefault()
        debugger
        try {
        let res = await axios.post(`http://localhost:3001/posts/`, {
                user_id: user_id,
                pictures: picture,
                captions: caption.value
        })
        let postID = res.data.payload.id
        setArrCaption(caption.split(' '));
        getHashtag(arrCaption, postID)
         fetchUsersFeed();
         debugger
        }catch(err){
            console.log(err)
        }
    }
    const getHashtag = async (arr, postID) => {
        arr.forEach((word) =>{
            if(word[0] === "#"){
                console.log(word)
                setNewHash(word)
                debugger
         }
       })
       try{
           let res2 = await axios.post(`http://localhost:3001/hashtag/`, { post_id:postID, hashtag:newHash });
           debugger
            fetchUsersFeed()
     } catch (err){
         debugger
         console.log(err)
     }
     }
    return (
            <form onSubmit ={handlePostSubmit} className="UserFeed">
                <input type="text" placeholder="Enter A Caption!" {...caption}/>
                 <input type="file" onChange={uploadPicture}/>
                <button type="submit" > Post Bytes </button>
            </form>
    )
}
export default CreatePost;
import React, {useState} from 'react';
import 'axios' from axios;
import { useInputs } from "../utility/InputHooks";

const CreatePost = ({user_id}) => {
    const captions = useInput("")

    const handlePostClick = async () => {
        try {
        let res = await axios.post("/posts")
        }catch(err){
            console.log(err)
        }
    } 

    return (
        <div className="createPost">
        
    )
}
import React, {useState} from 'react';
import axios from 'axios';
import { useInputs } from "../utility/InputHooks";
import Popup from 'reactjs-popup';

const EditProfile = ({fetchUserInfo}) => { 
    const username = useInputs("")
    const [userPic, setUserPic] = useState("")
    const [loading, setLoading] = useState(false)

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
        setUserPic(file.secure_url)
        setLoading(false)
    }


    const updateProfile = async (e) => {
        debugger
        e.preventDefault();
        try {
            let res = await axios.patch(`http://localhost:3001/users/1`, {userName:username.value, userPic:userPic})
            debugger
            fetchUserInfo()
        } catch(err){
            console.log(err)
        }
    }


    return (
        <>
        <Popup trigger={<button className="Pop">Change Profile</button>} position="right center">
            <div>
                <form onSubmit={updateProfile}>
                    <label>
                        Edit Info
                    </label>
                    <input type="text" placeholder="Change Username" {...username}/>
                    <input type="file" onChange={uploadPicture}/>
                    <input type="submit"/>
                </form>
            </div>
        </Popup>
        </>
    )
}

export default EditProfile;
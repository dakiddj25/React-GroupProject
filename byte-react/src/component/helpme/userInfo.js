import React from "react";
// import axios from 'axios'

const UserDisplay =({userInfo})=>{


    //  const [homeFeed, setHomeFeed] = useState([])

    // const updateFeed = async () => {
    //     try {
    //         let res = await axios.get("http://localhost:3001/posts/")
    //         debugger
    //         setHomeFeed(res.data.payload)

    //     }catch(err){
    //         console.log(err)
    //         setHomeFeed([])
    //     }
    // }

   
        return(
            <div className = "UserInfo" key = {userInfo.id}>
                <h2>{userInfo.username}</h2>
               <img src = {userInfo.user_pic} className="userPic" alt=""></img>
               <h3>{userInfo.firstname} {userInfo.lastname}</h3>
               <p>{userInfo.email}</p>
           </div>

        )
  
  

}

export default UserDisplay


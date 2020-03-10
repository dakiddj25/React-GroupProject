import React from "react";
import axios from "axios"

// const [userProfilepic , setUserProfilePic] = useState("")
// const [allFeeds , setallFeeds] = useState([])
let user = localStorage.getItem("currentUserID")

const sample = async (e) => {
    e.preventDefault()
    
    let caption =  e.target.caption.value

    
    postPicture(e)
    // createHashtag(e)

}


const postPicture = async(e)=> {
    e.preventDefault();  
    let pictures = e.target.image.value
    let caption =  e.target.caption.value
   
    debugger
    try{
        let res = await axios.post(`http://localhost:3001/posts/`,{ user_id:user, pictures:pictures , captions:caption});
            debugger
            let postID = res.data.payload.id

            if(caption.includes("#")){
                for(let i= 0; i < caption.length; i++){
                    if(caption[i] === "#"){
                        let newhash = caption.slice(i)
                            // debugger
                            try{
                                let res = await axios.post(`http://localhost:3001/hashtags/`,{ post_id:postID, hashtag:newhash });
                                    debugger
                          
                            } catch (err){
                                debugger
                                console.log(err)
                            }
                    }
                }
        
            }
  
    } catch (err){
        debugger
        console.log(err)
    }
 }

 const createHashtag =  (caption) => {

    if(caption.includes("#")){
        debugger

    }

 }



// const createPost = () => { // create a component for search bar
//     return (
//         <div>
//         <form onSubmit = {addPost}>
//             <input type = "text" placeholder = "caption"/>
//             <input type= "file" accept = "image/*"/>
//             <button>submit</button>
//         </form>
//         </div> //Button onClick runs the searchbar component
//     )
//  }

export default postPicture;
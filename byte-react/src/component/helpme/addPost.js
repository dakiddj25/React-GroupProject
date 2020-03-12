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

            const arrOfCaption = caption.split(' ');

            

getHashtag(arrOfCaption,postID)
//returns hastag word that can be pushed into a axios post
  
    } catch (err){
        debugger
        console.log(err)
    }
 }

 const getHashtag = async (arr, postID) => {
     let newhash = ""
     arr.forEach((word) =>{
         if(word[0] === "#"){
             console.log(word)
             newhash = word
      }
    })
    try{
        let res2 = await axios.post(`http://localhost:3001/hashtag/`,{ post_id:postID, hashtag:newhash });
          debugger

  } catch (err){
      debugger
      console.log(err)
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
import axios from "axios"
// import React, {useState} from 'react';

// const [userProfilepic , setUserProfilePic] = useState("")
// const [allFeeds , setallFeeds] = useState([])
let user = localStorage.getItem("currentUserID")

// const Sample = async (e) => {
//     e.preventDefault()
//     const [image, setImage] = useState('')
//     const file = e.target.image
//     const data = new FormData()

//     data.append('file', file[0])
//     data.append('upload_prest', 'dbhncpu02')

//     let res = await axios.post("https://res.cloudinary.com/dbhncpu02/image/upload/", {data})
    
//     setImage(file.secure_url)
//     console.log(image)
//     debugger
//     // postPicture(e)
//     // createHashtag(e)

// }


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

export default postPicture;
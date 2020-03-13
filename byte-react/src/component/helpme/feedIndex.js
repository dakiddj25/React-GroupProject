import React, {useEffect, useState} from "react"

const FeedIndex =({posts})=>{
  
    const displayResults = posts.map(post=>{
        return(

            <div className="post" key={post.id}>

                <div className="usersPorfilePic">
                    <img src= {post.user_pic}></img>
                    <h2>{post.username}</h2>
                </div>

                <div className="usersPost">
                    <img src= {post.pictures}></img>
                    <div className="caption">
                        <label>{post.captions}</label>
                    </div>
                </div>
            
                
            </div>
        )
    })
    return(
        <>
        {displayResults}
        </>
    )

}
export default FeedIndex

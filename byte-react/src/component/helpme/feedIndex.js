import React, {useEffect, useState} from "react"

const FeedIndex =({posts})=>{
  
    const displayResults = posts.map(post=>{
        return(

            <div className="post" key={post.id}>
                <img src= {post.pictures}></img>
                <br/>
                <label>{post.captions}</label>
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

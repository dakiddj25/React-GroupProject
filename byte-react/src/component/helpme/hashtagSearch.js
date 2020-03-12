import React,{ useState } from "react"
import axios from "axios"
import { useInputs, fetchData } from "../../utility/customHooks";
import FindHashTag from "./feedIndex"

// SELECT * FROM hashtags WHERE hashtag LIKE '%cor%'

const SearchBar=({handleSubmit})=>{   
    const hashtag = useInputs("")
    const handleFormSubmit = (e) =>{
        e.preventDefault()
        handleSubmit(hashtag.value)
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <input placeholder = "Search by HashTag"{...hashtag}/>
        </form> 
    )
}


 export default SearchBar
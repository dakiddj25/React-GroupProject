import React,{useState} from "react"
import axios from "axios"
import { useInputs, fetchData } from "../../utility/InputHooks";

// SELECT * FROM hashtags WHERE hashtag LIKE '%cor%'

const SearchBar=()=>{
    
    
    const hashtag = useInputs("")
    const [results, setResults] = useState([])

    
    const getHashTag = async (e) => { // create a component for search bar
        e.preventDefault()
        debugger
        try{
            let res = await axios.post("http://localhost:3001/hashtag/getHashtag/", {hashtag: hashtag.value})
            setResults(res.data.payload)
        }catch(err){
            console.log(err)
        }

    }
    const displayResults = results.map(result=>{
        return(
            
            <div className="post" key={result.id}>
                <img src= {result.pictures}></img>
                <label>{result.captions}</label>
            </div>
        )
    })
        return (
            
            <div>
            <form onSubmit={getHashTag}>
            <input type = "text" placeholder = "Search by HashTag" required {...hashtag}/>
            <input type="submit" className="hastag"/>
            {displayResults}
            </form>
        </div> //Button onClick runs the searchbar component
    )

}


 export default SearchBar


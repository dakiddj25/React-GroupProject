import React, {useState} from "react"



const searchBar = () => { // create a component for search bar
    return (
        <div>
            <input type = "text" placeholder = "Search by HashTag"/>
            <button>Search</button>
        </div> //Button onClick runs the searchbar component
    )
 }

import React, { useEffect, useState } from "react";
import axios from "axios";

//destructure when calling in other pages and import 

//use for inputs, will change on every letter
export const useInputs = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }
    return { value, onChange: handleChange}
}
export  const useStateWithLocalStorage = localStorageKey => {
    const [value, setValue] = React.useState(
      localStorage.getItem(localStorageKey) || ''
    );
    React.useEffect(() => {
      localStorage.setItem(localStorageKey, value);
    }, [value]);
    return [value, setValue];
  };

// //should do a get axios
// export const fetchData = (url, initialValue) => {
//     const [data, setData] = UseState(initialValue);
//     const [isLoading, setIsLoading] = useState(true);

//     const axiosGet = async (url) => {
//         try {
//             let res = await axios.get(url)
//             setData(res.data)
//             setIsLoading(false)
//         } catch (error) {
//             setData(initialValue)
//             setIsLoading(false)
//             console.log(error)
//         }
//         useEffect(() => {
//             setTimeout(() => {
//                 axiosGet(url) 
//             }, 1000)
//         }, [])
//         return[data, isLoading];
//     }
// }

// //should do a post axios
// export const postData = (url, initialValue) => {
//     const [post, setPost] = UseState(initialValue);
//     const [isLoading, setIsLoading] = useState(true);

//     const axiosPost = async (url) => {
//         try {
//             let res = await axios.post(url)
//             setPost(res.data)
//             setIsLoading(false)
//             console.log("Posted")
//         } catch (error) {
//             setPost(initialValue)
//             setIsLoading(false)
//             console.log(error)
//         }
//         useEffect(() => {
//             setTimeout(() => {
//                 axiosPost(url) 
//             }, 1000)
//         }, [])
//         return[post, isLoading];
//     }
// }

// //should delete on a delete axios
// //should do a post axios
// export const deleteData = (url, initialValue) => {
//     const [deleted, setDeleted] = UseState(initialValue);
//     const [isLoading, setIsLoading] = useState(true);

//     const axiosDelete = async (url) => {
//         try {
//             let res = await axios.deleted(url)
//             setDeleted(res.data)
//             setIsLoading(false)
//             console.log("deleteded")
//         } catch (error) {
//             setDeleted(initialValue)
//             setIsLoading(false)
//             console.log(error)
//         }
//         useEffect(() => {
//             setTimeout(() => {
//                 axiosDelete(url) 
//             }, 1000)
//         }, [])
//         return[deleted, isLoading];
//     }
// }
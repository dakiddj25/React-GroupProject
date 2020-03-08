import { useEffect, useState } from "react";
import axios from "axios";

//should do a get axios
export const fetchData = (url, initialValue) => {
    const [data, setData] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(true);

    const axiosGet = async (url) => {
        try {
            let res = await axios.get(url)
            setData(res.data)
            setIsLoading(false)
        } catch (error) {
            setData(initialValue)
            setIsLoading(false)
            console.log(error)
        }
    }
         useEffect(() => {
            setTimeout(() => {
                axiosGet(url) 
            }, 1000)
        }, [])
        return[data, isLoading];
}
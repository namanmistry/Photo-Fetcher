import {useEffect,useState} from 'react'
import axios from 'axios'
const useMeta= ()=>{
    const [data,setData]=useState([])
    const [metaLoading,setMetaLoading]=useState(true)
    useEffect(()=>{
        setMetaLoading(true)
        axios({
            method:'GET',
            url:'http://openlibrary.org/search.json',
            params:{q:query,page:pageNumber}

        }).then((res)=>{
            setData(prevBooks=>{
            return [...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])]})
            setMetaLoading(false)
        })
        
    },[])
    
    return {data,metaLoading};
}

export default useMeta;
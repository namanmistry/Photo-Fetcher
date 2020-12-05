import { useEffect, useState } from 'react'
import axios from 'axios'
//This Custom Hook Will Fetch Photos From The API 
const useFile = (limit, offset) => {
    const [data, setData] = useState([])
    const [fileLoading, setFileLoading] = useState(true)
    const [hasMore, setHasMore] = useState(false)
    useEffect(() => {
        setFileLoading(true)
        axios({
            method: 'GET',
            url: 'http://naman1172-23795.portmap.io:23795/api/',
            params: { limit: limit, offset: offset },
            headers: {
                "Authorization": `Token ${localStorage.getItem('token')}`
            }

        }).then((res) => {
            
            setData(prevBooks => {
                return [...new Set([...prevBooks, ...res.data.results.map(b => b)])]
            })
            setHasMore(res.data.results.length > 0);
            setFileLoading(false)
        })

    }, [limit, offset])

    return { data, fileLoading, hasMore };
}

export default useFile;
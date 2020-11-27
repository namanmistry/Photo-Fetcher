import { useEffect, useState } from 'react'
import axios from 'axios'
//This Custom Hook Will Fetch Photos From The API 
const useFile = (query, pageNumber) => {
    const [data, setData] = useState([])
    const [fileLoading, setFileLoading] = useState(true)
    useEffect(() => {
        setFileLoading(true)
        axios({
            method: 'GET',
            url: 'http://openlibrary.org/search.json',
            params: { q: query, page: pageNumber }

        }).then((res) => {
            setData(prevBooks => {
                return [...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])]
            })
            setFileLoading(false)
        })

    }, [query, pageNumber])

    return { data, fileLoading };
}

export default useFile;
import { useEffect, useState } from 'react'
import axios from 'axios'
//This Custom Hook Will Fetch Folders From The API 
const useFolder = (query, pageNumber) => {
    const [data, setData] = useState([])
    const [folderLoading, setFolderLoading] = useState(true)
    useEffect(() => {
        setFolderLoading(true)
        axios({
            method: 'GET',
            url: 'http://openlibrary.org/search.json',
            params: { q: query, page: pageNumber }

        }).then((res) => {
            setData(prevBooks => {
                return [...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])]
            })
            setFolderLoading(false)
        })

    }, [query, pageNumber])

    return { data, folderLoading };
}

export default useFolder;
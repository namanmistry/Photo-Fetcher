import { useEffect, useState } from 'react'
import axios from 'axios'
//This File Will Fetch The Meta Data Of The System From The API
const useMeta = () => {
    const [metaData, setMetaData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        

        axios({
            method: 'GET',
            url: 'http://naman1172-23795.portmap.io:23795/api/systemstorage/',
            headers: {
                "Authorization": `Token ${localStorage.getItem('token')}`
            }

        }).then((res) => {
            
            setMetaData(res.data);
            setLoading(false);
        })
    }, []);



    return { metaData, loading };
}

export default useMeta;
import { useEffect } from 'react'
import axios from 'axios'
//This Custom Hook will Handle The Post Request Going To The API
const useUpload = (isUploading, firstRun, file) => {
    useEffect(() => {
        if (!firstRun.current && file !== '') {
            const data = new FormData();
            data.append('file', file);
            axios({
                method: 'POST',
                url: 'http://naman1172-23795.portmap.io:23795/api/upload/',
                data: data,
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`
                }
            }).then(res => {
                //Here If The Response Is Successfull Then We Will Show A Small Modal
                
            })
        } else {
            if (!firstRun.current) {
                alert('First select the file')
            }
        }
    }, [isUploading, firstRun])
}

export default useUpload;
import { useEffect } from 'react'
import axios from 'axios'
//This Custom Hook will Handle The Post Request Going To The API
const useUpload = (isUploading, firstRun) => {
    useEffect(() => {
        if (!firstRun.current) {
            axios({
                method: 'POST',
                url: 'http://localhost:8000/api/',
                data: {
                    "id": 15,
                    "title": "hahahahahahaah",
                    "content": "he is very great guy"
                }
            }).then(res => {
                //Here If The Response Is Successfull Then We Will Show A Small Modal
                console.log(res);
            })
        }
    }, [isUploading,firstRun])
}

export default useUpload;
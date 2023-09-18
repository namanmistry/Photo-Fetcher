import useUpload from '../LogicComponents/useUpload'
import { useState, useRef } from 'react'
import NavBar from '../components/Navigation/NavBar'

//Upload Page Similar To Home Page But Having Upload Button Extra
const Upload = () => {

    //To Keep Working The Uplod Button By Toggeling isUploading useState
    const [isuploading, setIsUploading] = useState(false)
    const [file, setFile] = useState('');

    //To Check The Initial Render Of The Component To Avoid The First Default Post Request
    const firstRun = useRef(true)

    const clickHandler = () => {
        setIsUploading(!isuploading)
        firstRun.current = false
    }

    const fileChangeHandler = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    useUpload(isuploading, firstRun, file)

    return (
        <>
            {/* <HomeLayout navTitle="Upload Page" pageInfo="On This Page You Can Navigate To Any Folder And Upload Your Photos" /> */}
            <NavBar Title="Upload" />
            <input type="file" accept='image/*' style={{ width: "100%", position: 'fixed', bottom: "0rem" }} className="btn btn-dark"
                multiple onChange={fileChangeHandler} />
            <button onClick={clickHandler} style={{ position: 'fixed', bottom: '13px', right: '28px' }}>Upload</button>
        </>
    )
}

export default Upload;
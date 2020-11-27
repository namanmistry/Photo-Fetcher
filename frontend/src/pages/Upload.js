import HomeLayout from '../layouts/homeLayout/HomeLayout'
import useUpload from'../LogicComponents/useUpload'
import {useState,useRef} from 'react'
//Upload Page Similar To Home Page But Having Upload Button Extra
const Upload=()=>{
    //To Keep Working The Uplod Button By Toggeling isUploading useState
    const [isuploading,setIsUploading]=useState(false)
    //To Check The Initial Render Of The Component To Avoid The First Default Post Request
    const firstRun=useRef(true)
    const clickHandler=()=>{
        setIsUploading(!isuploading)
        firstRun.current=false
    }
    useUpload(isuploading,firstRun)
    
    return (
        <>
        <HomeLayout navTitle="Upload Page" pageInfo="On This Page You Can Navigate To Any Folder And Upload Your Photos"/>
        <input type="file" accept='image/*' style={{width:"100%",position:'fixed',bottom:"0rem"}} className="btn btn-dark"
        multiple/>
        <button  onClick={clickHandler} style={{position:'fixed',bottom:'13px',right:'28px'}}>Upload</button>
        </>
    )
}

export default Upload;
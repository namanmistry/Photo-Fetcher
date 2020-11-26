import useFolder from '../LogicComponents/useFolder'
import {useState,useEffect} from 'react'
import useFile from '../LogicComponents/useFile'
export const PopulateFolderData=()=>{
    const [folderData,setFolderData]=useState([])
    const {data,folderLoading}=useFolder('hello',1);
    useEffect(()=>{
        setFolderData(data.map((obj)=>{
            return {"name":obj}
        }))
    },[data])
   
    return {folderData,folderLoading};   
 
}

export const PopulateFileData=(pageNumber)=>{
    const [fileData,setFileData]=useState([])
    const {data,fileLoading}=useFile('aditya',pageNumber)
    console.log("i am here here here");
    useEffect(()=>{
        setFileData(data.map((obj)=>{
            return {"name":obj}
        }))
    },[data])
    return {fileData,fileLoading};
}


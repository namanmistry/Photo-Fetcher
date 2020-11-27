import useFolder from '../LogicComponents/useFolder'
import { useState, useEffect } from 'react'
import useFile from '../LogicComponents/useFile'

//This File Will Fetch The Folder Info,Directory Structure And All Of The Photos From The Server

export const PopulateFolderData = () => {
    //It Will Fetch All Folder Info And Make A Array Of Object Into folderData useState Using Custom Hook useState
    const [folderData, setFolderData] = useState([])
    //In useFolder Hook We Will Pass According To our API
    const { data, folderLoading } = useFolder('hello', 1);
    useEffect(() => {
        setFolderData(data.map((obj) => {
            return { "name": obj }
        }))
    }, [data])

    return { folderData, folderLoading };

}

export const PopulateFileData = (pageNumber) => {
    //Same As The FolderData But Here We Are Fetching Actual Photos
    const [fileData, setFileData] = useState([])
    const { data, fileLoading } = useFile('aditya', pageNumber)

    useEffect(() => {
        setFileData(data.map((obj) => {
            return { "name": obj }
        }))
    }, [data])
    return { fileData, fileLoading };
}


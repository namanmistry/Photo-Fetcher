// import { useEffect, useState } from 'react'
// import axios from 'axios'
// //This Custom Hook Will Fetch Folders From The API 
// const useFolder = (pageNumber) => {
//     const [data, setData] = useState([])
//     const [folderLoading, setFolderLoading] = useState(true)
//     useEffect(() => {
//         setFolderLoading(true)
//         axios({
//             method: 'GET',
//             url: 'https://jsonplaceholder.typicode.com/photos',
//             params: { _page: pageNumber }

//         }).then((res) => {
//             setData(prevBooks => {
//                 return [...new Set([...prevBooks, ...res.data.map(b => b.url)])]
//             })
//             setFolderLoading(false)
//         })

//     }, [pageNumber])

//     return { data, folderLoading };
// }

// export default useFolder;
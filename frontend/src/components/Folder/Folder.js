// import NavBar from '../../components/Navigation/NavBar'
// // import Box from '../../components/Box/Box'
// // import PageInfo from '../../components/PageInfo/PageInfo'
// // import SystemInfo from '../../components/SystemInfo/SystemInfo'
// import { PopulateFolderData } from '../../data/main'
// import { useCallback, useRef, useState } from 'react'
// import '../../components/Box/Spinner.css'
// import { useParams } from 'react-router-dom'

// //HomeLayout Is The Main Component For Displaying Home Page As Well As Upload Page
// //It Is The Combination Of The NAvBar,PageInfo,System Info And The Box Component

// const Folder = ({ navTitle, pageInfo }) => {
//     const { fname } = useParams()
//     console.log("fname is", fname);
//     const [pageNumber, setPageNumber] = useState(1)
//     // const { folderData, folderLoading } = PopulateFolderData();
//     const { folderData, folderLoading } = PopulateFolderData(pageNumber);
//     //pageNumber Will Set The Page Number That We Want To Fetch From The API

//     //Section For Seeing The Last Element And Triggering The Action
//     const observer = useRef()
//     const lastElementRef = useCallback(element => {
//         if (folderLoading) return
//         if (observer.current) observer.current.disconnect()
//         observer.current = new IntersectionObserver(entries => {
//             if (entries[0].isIntersecting) {
//                 setPageNumber(prev => prev + 1)
//             }
//         })
//         if (element) observer.current.observe(element)
//     }, [folderLoading])



//     return (
//         <>
//             <div id="reportsPage">
//                 <div className="" id="home">
//                     <NavBar Title={navTitle} />
//                     <div className="container">

//                         <div className="row tm-content-row">

//                             {folderData.map((name, index) => {
//                                 if (folderData.length === index + 1) {
//                                     console.log(name)
//                                     //This Is The Last Element Comming From The API
//                                     return (
//                                         <div ref={lastElementRef} key={index} className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col" >
//                                             <div className="tm-bg-primary-dark tm-block parent" >
//                                                 <div className="img-wrap">
//                                                     <img src={name.name} alt={name.name} />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )
//                                 } else {
//                                     //All Other Boxes Except Of The Last One
//                                     // return <Box {...name} key={index} />
//                                     return (
//                                         <div key={index} className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col" >
//                                             <div className="tm-bg-primary-dark tm-block parent" >
//                                                 <div className="img-wrap">
//                                                     <img src={name.name} alt={name.name} />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )
//                                 }
//                             })}

//                         </div>
//                         {//Css Loader
//                             folderLoading &&
//                             <div className="sk-circle">
//                                 <div className="sk-circle1 sk-child"></div>
//                                 <div className="sk-circle2 sk-child"></div>
//                                 <div className="sk-circle3 sk-child"></div>
//                                 <div className="sk-circle4 sk-child"></div>
//                                 <div className="sk-circle5 sk-child"></div>
//                                 <div className="sk-circle6 sk-child"></div>
//                                 <div className="sk-circle7 sk-child"></div>
//                                 <div className="sk-circle8 sk-child"></div>
//                                 <div className="sk-circle9 sk-child"></div>
//                                 <div className="sk-circle10 sk-child"></div>
//                                 <div className="sk-circle11 sk-child"></div>
//                                 <div className="sk-circle12 sk-child"></div>
//                             </div>
//                         }
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Folder;
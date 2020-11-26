
import {PopulateFolderData,PopulateFileData} from '../../data/main'
import {useCallback, useRef, useState} from 'react'
import '../folder/Spinner.css'
const Box = () => {
    const [pageNumber,setPageNumber]=useState(1)
    const {folderData,folderLoading}=PopulateFolderData();
    const {fileData,fileLoading}=PopulateFileData(pageNumber);
  
    const observer=useRef()
    const lastElementRef=useCallback(element=>{
        if(fileLoading) return
        if(observer.current) observer.current.disconnect()
        observer.current=new IntersectionObserver(entries=>{
            if(entries[0].isIntersecting){
               setPageNumber(prev=>prev+1)
            }
        })
        if(element) observer.current.observe(element)

    })
    
    return (
        <>
                {
                    fileData.map((name,index) => {
                        if(fileData.length===index+1){
                            console.log("naman i am the last element");
                            return (
                                
                                <>
                                 <div ref={lastElementRef} key={name.name} className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col" >
                                    <div className="tm-bg-primary-dark tm-block" >
                            <h2 className="tm-block-title">{name.name} and {index}</h2>
                                    {/* <img src='result.jpg' className="chartjs-render-monitor img-fluid img-thumbnail" style={{ display: "block" }} /> */}
                                </div>
                                </div>
                               
                                </>
                            )
                        }else{
                            return (
                                
                                
                                 <div key={name.name} className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col" >
                                    <div className="tm-bg-primary-dark tm-block" >
                            <h2 className="tm-block-title">{name.name} and {index}</h2>
                                    {/* <img src='result.jpg' className="chartjs-render-monitor img-fluid img-thumbnail" style={{ display: "block" }} /> */}
                                </div>
                                </div>
                            
                            )
                        }
                        
                        })
                    }
                    {fileLoading && 
                    <div class="sk-circle">
  <div class="sk-circle1 sk-child"></div>
  <div class="sk-circle2 sk-child"></div>
  <div class="sk-circle3 sk-child"></div>
  <div class="sk-circle4 sk-child"></div>
  <div class="sk-circle5 sk-child"></div>
  <div class="sk-circle6 sk-child"></div>
  <div class="sk-circle7 sk-child"></div>
  <div class="sk-circle8 sk-child"></div>
  <div class="sk-circle9 sk-child"></div>
  <div class="sk-circle10 sk-child"></div>
  <div class="sk-circle11 sk-child"></div>
  <div class="sk-circle12 sk-child"></div>
</div>
                    }
                
                    
        </>
    )
}

export default Box;
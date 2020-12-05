import NavBar from '../../components/Navigation/NavBar'
import Box from '../../components/Box/Box'
import PageInfo from '../../components/PageInfo/PageInfo'
import SystemInfo from '../../components/SystemInfo/SystemInfo'
import { PopulateFileData } from '../../data/main'
import { Data } from '../../data/meta';
import { useCallback, useRef, useState } from 'react'
import '../../components/Box/Spinner.css'

//HomeLayout Is The Main Component For Displaying Home Page As Well As Upload Page
//It Is The Combination Of The NAvBar,PageInfo,System Info And The Box Component

const HomeLayout = (props) => {

    const [limit, setLimit] = useState(10)
    const [offset, setOffset] = useState(0)
    const { fileData, fileLoading, hasMore } = PopulateFileData(limit, offset);
    const { chartData, loading } = Data();

   
    //pageNumber Will Set The Page Number That We Want To Fetch From The API

    //Section For Seeing The Last Element And Triggering The Action
    const observer = useRef()
    const lastElementRef = useCallback(element => {
        if (fileLoading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setOffset(prev => prev + limit)
            }
        })
        if (element) observer.current.observe(element)
    }, [fileLoading, hasMore])



    return (
        <>
            <div id="reportsPage">
                <div className="" id="home">
                    <NavBar {...props} Title={props.navTitle} />
                    <div className="container">
                        <PageInfo pageInfo={props.pageInfo} />
                        <div className="row tm-content-row">
                            {!loading && <SystemInfo data={chartData} />}
                            {fileData.map((obj, index) => {
                                if (fileData.length === index + 1) {
                                    //This Is The Last Element Comming From The API
                                    return (
                                        <div ref={lastElementRef} key={index} className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col" >
                                            <div className="tm-bg-primary-dark tm-block" >
                                                <h2 className="tm-block-title">{obj.title}</h2>
                                                <img width="300" height="300" src={obj.url} alt="img" />
                                            </div>
                                        </div>
                                    )
                                } else {
                                    //All Other Boxes Except Of The Last One
                                    return <Box {...obj} key={index} />
                                }
                            })}

                        </div>
                        {//Css Loader
                            fileLoading &&
                            <div className="sk-circle">
                                <div className="sk-circle1 sk-child"></div>
                                <div className="sk-circle2 sk-child"></div>
                                <div className="sk-circle3 sk-child"></div>
                                <div className="sk-circle4 sk-child"></div>
                                <div className="sk-circle5 sk-child"></div>
                                <div className="sk-circle6 sk-child"></div>
                                <div className="sk-circle7 sk-child"></div>
                                <div className="sk-circle8 sk-child"></div>
                                <div className="sk-circle9 sk-child"></div>
                                <div className="sk-circle10 sk-child"></div>
                                <div className="sk-circle11 sk-child"></div>
                                <div className="sk-circle12 sk-child"></div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeLayout;
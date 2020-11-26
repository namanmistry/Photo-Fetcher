import NavBar from '../../components/Navigation/NavBar'
import Box from '../../components/folder/Box'
import PageInfo from '../../components/PageInfo/PageInfo'
import SystemInfo from '../../components/SystemInfo/SystemInfo'

const HomeLayout=()=>{
    
    return(
        <>
         <div id="reportsPage">
                <div className="" id="home">
                    <NavBar />
                    <div className="container">
                       <PageInfo />
                        <div className="row tm-content-row">
                            <SystemInfo />
                            <Box />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeLayout;
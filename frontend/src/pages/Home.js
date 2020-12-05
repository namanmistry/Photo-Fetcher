import HomeLayout from '../layouts/homeLayout/HomeLayout'
//Main Home Page
const Home = (props) => {

    return (
        <>
            <HomeLayout {...props} navTitle="Home Page" pageInfo="This Is The Home Page, Here You Can See All Of Your Photos" />
        </>
    )
}

export default Home;
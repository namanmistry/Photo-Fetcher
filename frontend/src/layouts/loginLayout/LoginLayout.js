import LoginForm from '../../components/Form/LoginForm'
//This File Contains The Layout For The Login Page
const LoginLayout = (props) => {
    return (
        <>
            <div id="reportsPage">
                <div className="" id="home">
                    <div className="container">
                        <div className="w-75 p-10" style={{ paddingLeft: "25%" }}>
                            <LoginForm {...props} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginLayout;
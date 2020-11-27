import { Link } from 'react-router-dom'
//NavIcon Will Handle All Of The Links That You Want To Give In The NavBar
//You Can Directly Add Links To New Pages Here
const NavIcon = () => {
    return (
        <>
            <ul className="navbar-nav mx-auto h-100">
                <li className="nav-item" >
                        <Link className="navicon nav-link" to="/home" >Home</Link>
                </li>
                <li className="nav-item">
                        <Link className="navicon nav-link" to="/upload">Upload</Link>
                </li>
            </ul>
        </>

    )
}

export default NavIcon;
import NavIcon from './NavIcon'

const NavBar=()=>{
    return (
        <>
       <nav className="navbar navbar-expand-xl">
            <div className="container h-100">
                <a className="navbar-brand" href="index.html">
                    <h1 className="tm-site-title mb-0">Product Admin</h1>
                </a>
                <button className="navbar-toggler ml-auto mr-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars tm-nav-icon"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavIcon />
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link d-block" href="login.html">
                                Admin, <b>Logout</b>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
        </>
    )
}

export default NavBar;
import React from 'react';
import NavIcon from './NavIcon'
import { withRouter } from 'react-router-dom';
import auth from '../../auth';
import * as actions from '../../store/actions/auth'
import { connect } from 'react-redux';

//Main Navigation Bar For All Of The Layouts
//Title Attribute Here Will Give Each NavBar On Different Page A New Title
class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logout();
        auth.logout(() => {
            this.props.history.push('/');
        });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-xl">
                <div className="container h-100">
                    <a className="navbar-brand" href="index.html">
                        <h1 className="tm-site-title mb-0">{this.props.Title}</h1>
                    </a>
                    <button className="navbar-toggler ml-auto mr-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars tm-nav-icon"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavIcon />
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button onClick={this.handleLogout}>
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(NavBar));

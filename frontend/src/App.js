import React from 'react';
import CustomRouter from './routers/Router'
import { BrowserRouter as Router } from 'react-router-dom'

import * as actions from './store/actions/auth';
import { connect } from 'react-redux';


class App extends React.Component {
    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {
        return (
            <Router>
                <CustomRouter {...this.props} />
            </Router>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

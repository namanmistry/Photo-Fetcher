import React from 'react';
import * as actions from '../../store/actions/auth';
import auth from '../../auth';
import { connect } from 'react-redux';

//Login Form To Check The Authenticity Of A Person
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.addEventListener('DOMContentLoaded', this.handleLoad);
  }

  componentWillUnmount() {
    window.removeEventListener('DOMContentLoaded', this.handleLoad);
  }

  handleLoad() {
    if (localStorage.getItem('token')) {
      auth.login(() => {
        this.props.history.push('/home')
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    this.props.onAuth(username, password)
    setTimeout(() => {
      this.handleLoad();
    }, 3000)
  }

  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <p>{this.props.error.message}</p>
      )
    }

    return (
      <div>

        { errorMessage}
        {
          this.props.loading ?

            <p>Loading</p>

            :

            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <div className="row">
                <div className="col-12 text-center">
                  <h2 className="tm-block-title mb-4">Welcome to Dashboard, Login</h2>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12">
                  <form className="tm-login-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input name="username" type="text" className="form-control validate" id="username" required="" />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="password">Password</label>
                      <input name="password" type="password" className="form-control validate" id="password" required="" />
                    </div>
                    <div className="form-group mt-4">
                      <button type="submit" className="btn btn-primary btn-block text-uppercase">
                        Login
                  </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        }
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
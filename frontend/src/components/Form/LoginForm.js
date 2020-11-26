
const LoginForm=()=>{
    return(
        <>
        <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="tm-block-title mb-4">Welcome to Dashboard, Login</h2>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <form action="index.html" method="post" className="tm-login-form">
                  <div className="form-group">
                    <label for="username">Username</label>
                    <input name="username" type="text" className="form-control validate" id="username" value="" required=""/>
                  </div>
                  <div className="form-group mt-3">
                    <label for="password">Password</label>
                    <input name="password" type="password" className="form-control validate" id="password" value="" required=""/>
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
        </>
    )

}

export default LoginForm;
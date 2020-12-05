import Login from '../pages/Login'
import Home from '../pages/Home'
import Upload from '../pages/Upload'
import { Route } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute';

const Router = () => {
  return (
    <>
      <Route exact path="/" component={Login} />
      <ProtectedRoute exact path="/home" component={Home} />
      <ProtectedRoute exact path="/upload" component={Upload} />
    </>
  )
}

export default Router;
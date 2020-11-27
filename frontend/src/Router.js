
import Login from './pages/Login'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Folder from '../src/components/Folder/Folder'
import { Route } from 'react-router-dom'

const Router = () => {
  return (
    <>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/upload">
        <Upload />
      </Route>

      <Route exact path="/home/:fname">
        <Folder />
      </Route>
    </>
  )
}

export default Router;

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import { useState, useEffect } from 'react'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import { Container } from 'react-bootstrap';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {


  const [count, setCount] = useState(0)
  ''
  return (
    <div className="App">
      <Router>
        <div className="navkop">
          <Link to={'/'}>Homepage</Link>
          <Link to={'/createpost'}>Create A Post</Link>
          <Link to={'/login'}>Login</Link>
          <Link to={'/register'}>Register</Link>
        </div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/createpost' element={<CreatePost />} />
            <Route path='/post/:id' element={<Post />} />
            <Route path='/register' element = {<Register/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
      </Router>
    </div >
  )
}

export default App



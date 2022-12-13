
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import { useState, useEffect } from 'react'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {


  const [count, setCount] = useState(0)
  ''
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to={'/'}>Homepage</Link>
          <Link to={'/createpost'}>Create A Post</Link>
        </div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/post/:id' element={<Post />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App



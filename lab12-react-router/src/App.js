import React from 'react'
/* react router dom dependecies */
import {
  BrowserRouter as Router, // Router is for routing (pair the URL to component)
  Routes, // a group of routes
  Route, // represent one pairing of URL to component
  Link // represent a <a href> that you can click
} from 'react-router-dom'

import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Home from  './pages/Home'
import SubmittedForm from './pages/SubmittedForm'
import Posts from './pages/Posts'
import PostPage from './pages/PostPage'

function App() {
  return (
    <Router>

      {/* Any JSX elements here will stay from page to page */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/post-page">Post Page</Link>
          </li>
        </ul>
      </nav>

      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/submitted-form" element={<SubmittedForm/>} />
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/post-page/:post_id" element={<PostPage/>} />
      </Routes>

    </Router>
  );
}

export default App;
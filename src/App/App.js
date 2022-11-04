import React from 'react'
//import ReactDOM from 'react-dom'
import './App.css';
import SideBar from '../components/SideBar/SideBar';
import PostList from '../components/PostList/PostList';
import NavBar from '../components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route, /* Link */ } from 'react-router-dom';
import FetchPostList from '../components/PostList/FetchPostList';
import FetchSideBar from '../components/SideBar/FetchSideBar';

const App = () => {
  return  (
    <Router>
      <main>
        <div id="logic">
        <Routes>
          <Route path="/subreddit/:subreddit" element="<FetchPostList /> <FetchSideBar />" />
          <Route path="/search/:searchTerm" element="<FetchPostList /> <FetchSideBar />" />
          <Route path="/" element="<FetchPostList /> <FetchSideBar />" />
        </Routes>
        </div>
        <div id="container">
          <NavBar />
          <SideBar />
          <PostList />
        </div>
      </main>
    </Router>
  )
  }

// T-67 let components change URL

// T-68 write fetch logic in one file that depends on the current location

export default App;

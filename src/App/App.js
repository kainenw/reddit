import React from 'react'
//import ReactDOM from 'react-dom'
import './App.css';
import Home from '../Pages/Home/Home'
import Search from '../Pages/Search/Search';
import Subreddit from '../Pages/Subreddit/Subreddit';
import { BrowserRouter as Router, Route, /* Link */ } from 'react-router-dom';

class App extends React.Component {
  render() {
    return  (
      <Router>
        <main>
          <Route path="/subreddit/:subreddit" element={<Subreddit/>} />
          <Route path="/search/:searchTerm" element={<Search/>} />
          <Route path="/" element={<Home/>} />
        </main>
      </Router>
    )
  }
}

export default App;

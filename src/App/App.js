import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import HomePage from "../components/container/Pages/HomePage";
import SearchPage from "../components/container/Pages/SearchPage";
import SearchBarLogic from "../components/container/SearchBar/SearchBarLogic";
import SubredditPage from "../components/container/Pages/SubredditPage";
import TitleBar from "../components/presentation/TitleBar";

const App = (props) => {
  return (
    <Router>
      <header>
        <h1>
          <NavLink id="home-button" to="/" replace={true}>
            <span>Red</span>dit
          </NavLink>
        </h1>
        <SearchBarLogic />
        <TitleBar />
      </header>
      <Routes>
        <Route path="/search/:searchTerm" element={<SearchPage />} />
        <Route path="/r/:subreddit" element={<SubredditPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

// T-67 let components change URL

// T-68 write fetch logic in one file that depends on the current location

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/container/Pages/HomePage";
import SearchPage from "../components/container/Pages/SearchPage";
import NavBarLogic from "../components/container/NavBar/NavBarLogic";
import SubredditPage from "../components/container/Pages/SubredditPage";
import ErrorBoundary from "./ErrorBoundry";
import PostPage from "../components/container/Pages/PostPage";

const App = (props) => {
  return (
    <ErrorBoundary>
      <Router>
        <NavBarLogic />
        <Routes>
          <Route path="/search/:searchTerm" element={<SearchPage />} />
          <Route path="/r/:subreddit" element={<SubredditPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/"  element={<HomePage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

// T-67 let components change URL

// T-68 write fetch logic in one file that depends on the current location

export default App;

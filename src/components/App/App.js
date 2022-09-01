import React from 'react'
//import ReactDOM from 'react-dom'
import './App.css';
//import { SearchResults } from '../SearchResults/SearchResults';
import { Post } from "../Post";
import { SideList } from "../SideList"

let sampleData = [
  {title: 'a1', text: 'b1', image: 'c1', subreddit: 'r/1', user: 'u/1', id: '1'},
  {title: 'a2', text: 'b2', image: 'c2', subreddit: 'r/2', user: 'u/2', id: '2'},
  {title: 'a3', text: 'b3', image: 'c3', subreddit: 'r/3', user: 'u/3', id: '3'},
  {title: 'a1', text: 'b1', image: 'c1', subreddit: 'r/1', user: 'u/1', id: '1'},
  {title: 'a2', text: 'b2', image: 'c2', subreddit: 'r/2', user: 'u/2', id: '2'},
  {title: 'a3', text: 'b3', image: 'c3', subreddit: 'r/3', user: 'u/3', id: '3'},
  {title: 'a1', text: 'b1', image: 'c1', subreddit: 'r/1', user: 'u/1', id: '1'},
  {title: 'a2', text: 'b2', image: 'c2', subreddit: 'r/2', user: 'u/2', id: '2'},
  {title: 'a3', text: 'b3', image: 'c3', subreddit: 'r/3', user: 'u/3', id: '3'},
  {title: 'a1', text: 'b1', image: 'c1', subreddit: 'r/1', user: 'u/1', id: '1'},
  {title: 'a2', text: 'b2', image: 'c2', subreddit: 'r/2', user: 'u/2', id: '2'},
  {title: 'a3', text: 'b3', image: 'c3', subreddit: 'r/3', user: 'u/3', id: '3'},
]


class App extends React.Component {
  

  render() {
    return  (
      <div>
        <header>
          <h1><span>Red</span>dit</h1>
          <input type="text" placeholder={'Search'} />
        </header>
        <main>
          <div id='subreddits'>
            <SideList data={sampleData} />
          </div>
          <div id='posts'>
          {sampleData.map((datum) => {
            return <Post data={datum} key={datum} />
          })}
          </div>
        </main>
      </div>
    )
    
  }
}





export default App;

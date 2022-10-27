import React from 'react'
import { SideBar } from '../../components/SideBar/SideBar'
import PostList from '../../components/PostList'

const Home = () => {
    return (
        <div>
            <SideBar />
            <PostList />
        </div>
    )
}

export default Home;
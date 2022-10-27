import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// T-65 fix thunk functionality

export const FetchHomePosts = createAsyncThunk(
    'home/setList',
    async (sort) => {
        const endpoint = 'www.reddit.com/' + sort + '.json?'
        const response = await fetch(endpoint);
        const json = response.json;
        return json;
    }
)

export const FetchSearchPosts = createAsyncThunk(
    'search/setList',
    async (sort) => {
        const endpoint = 'www.reddit.com/' + sort + '.json?'
        const response = await fetch(endpoint);
        const json = response.json;
        return json;
    }
)

export const FetchSubredditPosts = createAsyncThunk(
    'post/setList',
    async (sort) => {
        const endpoint = 'www.reddit.com/' + subreddit.sort + '.json?'
        const response = await fetch(endpoint);
        const json = response.json;
        return json;
    }
)

// T-62 hook up thunk

const options = {
    name: 'postList',
    initialState: [],
    reducer: {

    },
    extraReducers: {

    }
}

const postList = createSlice(options);

export const selectPostList = state => state;

//actions

export default postList;
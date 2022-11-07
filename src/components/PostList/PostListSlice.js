import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// T-66 build refine thunk

// T-65 fix thunk functionality

export const FetchHomePosts = createAsyncThunk(
    'home/setHomePosts',
    async (sort) => {
        const endpoint = 'www.reddit.com/' + sort + '.json?'
        const response = await fetch(endpoint);
        const json = response.json;
        return json;
    }
)

export const FetchSearchPosts = createAsyncThunk(
    'search/setSearchPosts',
    async (searchTerm, sort) => {
        const endpoint = 'www.reddit.com/search.json?q=' + searchTerm + '&' + sort
        const response = await fetch(endpoint);
        const json = response.json;
        return json;
    }
)

export const FetchSubredditPosts = createAsyncThunk(
    'post/setSubredditPosts',
    async (subreddit, sort) => {
        const endpoint = 'www.reddit.com/r/' + subreddit + '.json?&' + sort
        const response = await fetch(endpoint);
        const json = response.json;
        return json;
    }
)

const sortPosts = (item) => {
    const result = {
        title: item.title,
        user: item.user,
        subreddit: item.subreddit,
        text: item.text,
        image: item.image,
        id: item.id
    }
    return result
}

// T-62 hook up thunk

const options = {
    name: 'postList',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false
    },
    reducer: {},
    extraReducers: builder => {
        builder
            .addCase(FetchHomePosts.pending, (state) => {
                state.isLoading = true
                state.hasError = false
            })
            .addCase(FetchHomePosts.fulfilled, (state, action) => {
                state.isLoading = true
                state.hasError = false
                state.posts = action.payload.map(sortPosts)
            })
            .addCase(FetchHomePosts.rejected, (state) => {
                state.isLoading = false
                state.hasError = true
            })
            .addCase(FetchSearchPosts.pending, (state) => {
                state.isLoading = true
                state.hasError = false
            })
            .addCase(FetchSearchPosts.fulfilled, (state, action) => {
                state.isLoading = true
                state.hasError = false
                state.posts = action.payload.map(sortPosts)
            })
            .addCase(FetchSearchPosts.rejected, (state) => {
                state.isLoading = false
                state.hasError = true
            })
            .addCase(FetchSubredditPosts.pending, (state) => {
                state.isLoading = true
                state.hasError = false
            })
            .addCase(FetchSubredditPosts.fulfilled, (state, action) => {
                state.isLoading = true
                state.hasError = false
                state.posts = action.payload.map(sortPosts)
            })
            .addCase(FetchSubredditPosts.rejected, (state) => {
                state.isLoading = false
                state.hasError = true
            })
    }
}

const postList = createSlice(options);

export const selectPostList = state => state;

//actions

export default postList.reducer;
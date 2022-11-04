import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// T-64 fix thunk functionality

export const FetchHomeSideBar = createAsyncThunk(
    'search/setHomeSideBar',
    async (sort) => {
        const endpoint = 'www.reddit.com/' + sort + '.json?'
        const response = await fetch(endpoint);
        const json = response.json;
        return json;
    }
)

export const FetchSearchSideBar = createAsyncThunk(
    'search/setSearchSideBar',
    async (sort) => {
        const endpoint = 'www.reddit.com/' + sort + '.json?'
        const response = await fetch(endpoint);
        const json = response.json;
        return json;
    }
)

export const FetchSubredditSideBar = createAsyncThunk(
    'post/setSubredditSideBar',
    async (sort) => {
        const endpoint = 'www.reddit.com/' + sort + '.json?'
        const response = await fetch(endpoint);
        const json = response.json;
        return json;
    }
)

const sortPosts = (item) => {
    /* const result = {
        // write sort function
    } */
    return item
}

// T-63 hook up thunks

const techSubreddits= ["/r/Technology", "/r/AskTechnology", "/r/Futurology", "/r/KeepOurNetFree ", "/r/pirateparty ", "/r/privacy", "/r/Gadgets", "/r/Hardware", "/r/Tech", "/r/Technews", "/r/Realtech", "/r/InternetIsBeautiful ", "/r/RenewableEnergy", "/r/SelfDrivingCars", "/r/TechSupport", "/r/TalesFromTechSupport", "/r/TechSupportGore", "/r/TechnologyPorn", "/r/ImaginaryTechnology", "/r/Programming", "/r/Learnprogramming", "/r/CScareerquestions", "/r/CompSci", "/r/NetSec", "/r/Engineering", "/r/Hacking", "/r/Software"]

const option = {
    name: 'sideBar',
    initialState: techSubreddits,
    reducer: {},
    extraReducers: builder => {
        builder
            .addCase(FetchHomeSideBar.pending, (state) => {
                state.isLoading = true
                state.hasError = false
            })
            .addCase(FetchHomeSideBar.fulfilled, (state, action) => {
                state.isLoading = true
                state.hasError = false
                state.posts = action.payload.map(sortPosts)
            })
            .addCase(FetchHomeSideBar.rejected, (state) => {
                state.isLoading = false
                state.hasError = true
            })
            .addCase(FetchSearchSideBar.pending, (state) => {
                state.isLoading = true
                state.hasError = false
            })
            .addCase(FetchSearchSideBar.fulfilled, (state, action) => {
                state.isLoading = true
                state.hasError = false
                state.posts = action.payload.map(sortPosts)
            })
            .addCase(FetchSearchSideBar.rejected, (state) => {
                state.isLoading = false
                state.hasError = true
            })
            .addCase(FetchSubredditSideBar.pending, (state) => {
                state.isLoading = true
                state.hasError = false
            })
            .addCase(FetchSubredditSideBar.fulfilled, (state, action) => {
                state.isLoading = true
                state.hasError = false
                state.posts = action.payload.map(sortPosts)
            })
            .addCase(FetchSubredditSideBar.rejected, (state) => {
                state.isLoading = false
                state.hasError = true
            })
    }
}

const sideBar = createSlice(option);

export const selectSideBar = state => state;

//actions

export default sideBar.reducer;
import { createSlice } from "@reduxjs/toolkit";

const option = {
    name: 'searchTerm',
    initialState: {
        searchTerm: '',
        sort: 'top'
    },
    reducer: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        }
    }
}

const navBar = createSlice(option);

export const selectNavBar = state => state;

export const selectSearchTerm = state => state.searchTerm

export const selectSort = state => state.sort

export const { setSearchTerm, setSort } = navBar.actions;

export default navBar.reducer;
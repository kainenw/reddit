import { createSlice } from "@reduxjs/toolkit";

const option = {
    name: 'searchTerm',
    initialState: '',
    reducer: {
        setSearchTerm: (state, action) => {
            state = action.payload
        }
    }
}

const searchTerm = createSlice(option);

export const selectSearchTerm = state => state;

export const { setSearchTerm } = searchTerm.actions;

export default searchTerm;
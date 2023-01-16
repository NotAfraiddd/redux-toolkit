import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filters",
    initialState: {
        search: "",
        status: "All",
        priority: [],
    },
    reducers: {
        searchTodo: (state, action) => {
            state.search = action.payload;
        },
        statusFilterTodo: (state, action) => {
            state.status = action.payload;
        },
        priorityFilterTodo: (state, action) => {
            state.priority = action.payload;
        },
    },
});

export default filterSlice;

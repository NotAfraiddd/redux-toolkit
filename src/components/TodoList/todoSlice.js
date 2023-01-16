import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoList",
    initialState: [
        { id: 1, name: "Di lam", completed: false, priority: "High" },
        { id: 2, name: "An", completed: true, priority: "Medium" },
        { id: 3, name: "Ngu", completed: true, priority: "Low" },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
    },
});
export default todoSlice;

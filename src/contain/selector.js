import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const statusTextSelector = (state) => state.filters.status;
export const priorityTextSelector = (state) => state.filters.priority;

export const todoShowResults = createSelector(
    todoListSelector,
    searchTextSelector,
    statusTextSelector,
    priorityTextSelector,
    (todoList, searchText, statusText, priorityText) => {
        return todoList.filter((dataInput) => {
            if (statusText === "All")
                return priorityText.length
                    ? dataInput.name.includes(searchText) && dataInput.priority.includes(priorityText)
                    : dataInput.name.includes(searchText);
            return (
                dataInput.name.includes(searchText) &&
                (statusText === "Completed" ? dataInput.completed : !dataInput.completed) &&
                (priorityText.length ? dataInput.priority.includes(priorityText) : true)
            );
        });
    }
);

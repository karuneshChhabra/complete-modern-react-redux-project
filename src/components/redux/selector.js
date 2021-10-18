import { createSelector } from "reselect";

export const getTodos = state => state.todoReducers;
export const getLoading = state => state.loading;

export const getIncompleteTodos = createSelector(
    getTodos,
    (todoReducers) => todoReducers.filter(value => !value.completed)
)

export const getCompleteTodos = createSelector(
    getTodos,
    (todoReducers) => todoReducers.filter(value => value.completed)
)

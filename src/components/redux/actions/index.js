import {ADD_TODO, REMOVE_TODO, COMPLETE_TODO} from '../constant';

export const addTodo = text => ({
    type:ADD_TODO,
    payload:text
});


export const removeTodo = text => ({
    type:REMOVE_TODO,
    payload:text
});

export const completeTodo = text => ({
    type:COMPLETE_TODO,
    payload:text
});



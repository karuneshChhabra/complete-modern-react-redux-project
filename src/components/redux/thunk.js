import {
  LOADING_IN_PROGRESS,
  LOADING_SUCCESS,
  LOADING_FAILED,
  ADD_TODO,
} from "./constant";
import axios from "axios";
import {completeTodo,removeTodo} from './actions';

export const loadData = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LOADING_IN_PROGRESS });
    const todos = await axios.get("https://jsonplaceholder.typicode.com/todos");
    const res = todos.data.slice(0,10);
    console.log(res);
    if(res.length>0){
      dispatch({ type: LOADING_SUCCESS, payload: {res} });
    }
  } catch (e) {
    console.log(e);
    dispatch({ type: LOADING_FAILED });
    dispatch(displayErrorMessage(e));
  }
};

export const saveTodo = (todo) => async (dispatch, getState) => {
  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    console.log(res);
  //  const result = res.json();
    dispatch({ type: ADD_TODO, payload: todo });
  } catch (e) {
   // dispatch(displayErrorMessage(e));
    dispatch({ type: ADD_TODO, payload: todo });
  }
};

export const deleteTodo = (todo) => async (dispatch, getState) => {
    try{
        const res= await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todo}`);
        const jsonRes = res;

        dispatch(removeTodo(todo))

    } catch(e){
        dispatch(displayErrorMessage(e));
    }
}

export const completeTodoThunk = (todo) => async (dispatch, getState) => {
    try{
     
        const res = await axios.post(`https://jsonplaceholder.typicode.com/todos/complete/${todo}`);
        dispatch(completeTodo(todo));

    }catch(e) {
        dispatch(completeTodo(todo));
      //  dispatch(displayErrorMessage(e))
    }
}

const displayErrorMessage = (message) => () => {
  alert(message);
};

import React, { useEffect } from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { loadData } from "./redux/thunk";
import styled from 'styled-components';

import {
  getIncompleteTodos,
  getCompleteTodos,
} from "./redux/selector";
import { useSelector, useDispatch } from "react-redux";

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;


function TodoListComponent() {
  const incompleteTodos = useSelector(getIncompleteTodos);
  const completeTodos = useSelector(getCompleteTodos);
  console.log(incompleteTodos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <ListWrapper>
      {incompleteTodos.length > 0 && (
        <div className="list-wrapper">
          <h3>Incomplete Todos</h3>
          {incompleteTodos.map((value) => {
            return <TodoListItem key={value.title} todo={value}></TodoListItem>;
          })}
        </div>
      )}
      {completeTodos.length > 0 && (
        <div className="list-wrapper">
          <h3>Complete Todos</h3>
          {completeTodos.map((value) => {
            return <TodoListItem key={value.title} todo={value}></TodoListItem>;
          })}
        </div>
      )}
      
    </ListWrapper>
  );
}

export default TodoListComponent;

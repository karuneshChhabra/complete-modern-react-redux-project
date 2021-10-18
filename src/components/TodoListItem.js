import React from "react";
import { useDispatch } from "react-redux";
import {completeTodo,removeTodo} from './redux/actions';
import {deleteTodo, completeTodoThunk} from './redux/thunk'
import './TodoListItem.css';
import styled from 'styled-components'



const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

const TodoItemContainerWithWarning = styled(TodoItemContainer)`
    border-bottom: ${props => (new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5)
        ? 'none'
        : '2px solid red')};
`;

const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const Button = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
`;

const CompletedButton = styled(Button)`
    background-color: #22ee22;
`;

const RemoveButton = styled(Button)`
    background-color: #ee2222;
    margin-left: 8px;
`;


function TodoListItem(props) {
    console.log(props);

  const dispatch = useDispatch();

  const markAsComplete = (text) => {
    dispatch(completeTodoThunk(text))
  };

  const deleteButton = (text) => {
    dispatch(deleteTodo(text))

  };
  const Container = props.todo.completed ? TodoItemContainer : TodoItemContainerWithWarning;
  

  return (
    <Container>
      <div> 
       {props.todo.title}
      </div> 
      <ButtonsContainer>
        <CompletedButton onClick={() =>markAsComplete(props.todo.title)}> {props.todo.completed?'Complete':'Mark as complete'}</CompletedButton>
        <RemoveButton onClick={() => deleteButton(props.todo.title)}>Delete</RemoveButton>
      </ButtonsContainer>
    </Container>
  );
}

export default TodoListItem;

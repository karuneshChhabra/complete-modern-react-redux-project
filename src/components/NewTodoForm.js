import React, { useState } from "react";
import "./NewTodoForm.css";
import { connect } from "react-redux";
import { getTodos } from "./redux/selector";
import { addTodo, removeTodo, completeTodo } from "./redux/actions";
import { saveTodo } from "./redux/thunk";
import styled from "styled-components";

const FormContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
`;

const NewTodoButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #22ee22;
`;

function NewTodoForm(props) {
  const [todo, setTodo] = useState("");

  const onClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    const value =
      props.todos &&
      props.todos.filter((todoValue) => {
        if (todoValue.title === todo) {
          return true;
        }
      });
    console.log(value);
    if (value.length === 0) {
      props.newTodoValueAdd(todo);
    }
    setTodo("");
  };
  return (
    <FormContainer>
      <form >
        <NewTodoInput
         
          placeholder="Enter new Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></NewTodoInput>
        <NewTodoButton onClick={onClick}>
          Create Todo
        </NewTodoButton>
      </form>
    </FormContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: getTodos(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newTodoValueAdd: (text) => dispatch(saveTodo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);

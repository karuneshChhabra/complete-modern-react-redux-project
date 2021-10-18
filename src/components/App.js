import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListComponent from "./TodoListComponent";
import {persistStore} from 'redux-persist';
import { PersistGate } from "redux-persist/integration/react";
import {store} from "./redux/store";
import {Provider} from 'react-redux';
import styled from 'styled-components';

const AppContainer = styled.div`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    width: 100vw;
    height: 100vh;
`;



const persist= persistStore(store);
const App = () => {
  return (
    <AppContainer>  
        <Provider store={store} >
        <PersistGate loading={<div>loading...</div>}
        persistor={persist}>
            <NewTodoForm></NewTodoForm>
            <TodoListComponent></TodoListComponent>
        </PersistGate>
        </Provider>
    </AppContainer>
  );
};

export default App;

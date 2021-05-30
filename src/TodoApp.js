import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilters';
import "./styles.css";
import { Box } from "@chakra-ui/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
    
}
const customTheme=extendTheme({ config })

function TodoApp(){
    return (
        <ChakraProvider theme={customTheme}>
        <div className="todo-app">
            <Box width="100%">
                <h1>Todo List</h1>
                    <AddTodo />
                    <VisibilityFilters />

                        <TodoList />
            </Box>
        </div>
        </ChakraProvider>

    );
}
export default TodoApp;
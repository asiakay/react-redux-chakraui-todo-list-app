import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";
import { Center, Box } from "@chakra-ui/react";

const Todo = ({ todo, toggleTodo }) => (
  <Center><Box><li className="todo-item" onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
  </li>
  </Box>
  </Center>
);

// export default Todo;
export default connect(
  null,
  { toggleTodo }
)(Todo);


  import React from "react";
  import Todo from "./Todo";


  const ToDoList = ({ todos, toggleTodo }) => {
   return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />);
  };

  export default ToDoList;


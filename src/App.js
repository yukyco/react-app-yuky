/*import logo from './logo.svg';
import './App.css';
*/

import { useState, useRef } from "react";
import ToDoList from "./ToDoList";


function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo1", completed: false },
  ]);

  const todoNameRef = useRef();
    //要素を取得する//

  const handleAddTodo = () => {
    //タスクを追加する。
    //console.log(todoNameRef.current.value);
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: "1", name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    //反転させる　completed
    setTodos(newTodos);
  };


  return (
    <div>
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク：{todos.filter((todo) => !todo.completed).length} </div>
    </div>
  );
}

export default App;

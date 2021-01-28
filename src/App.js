import "./App.css";
import Header from "./components/header";
import Todo from "./components/todo";
import TodoForm from "./components/todoform";
import React from "react";

function App() {
  const [todos, setTodos] = React.useState([
    { text: "Learn about React" },
    { text: "Use Git" },
    { text: "Build React App" },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <Header />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;

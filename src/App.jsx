import { useState } from "react";
import TodoList from "./components/to-do-list";
import "./App.css";
import TodoForm from "./components/to-do-form";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudo",
      isCompleted: false,
    },
  ]);
  return (
    <div className="app">
      <h1 className="title">Lista de tarefas</h1>
      <div className="todo-list">
        <TodoList todos={todos} />
      </div>
      <div className="todo-list">
        <TodoForm />
      </div>
    </div>
  );
}

export default App;

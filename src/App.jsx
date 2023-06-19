import { useState } from "react";
import TodoList from "./components/to-do-list";
import "./App.css";

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
    <div className="App">
      <h1>Lista de tarefas</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

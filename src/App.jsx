import { useState } from "react";
import TodoList from "./components/to-do-list";
import "./App.css";
import TodoForm from "./components/to-do-form";
import Search from "./components/search/search";
import Filter from "./components/filter/search";

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
  const [search, setSearch] = useState("");

  const addTodo = (text, category) => {
    const newTodo = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodo);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1 className="title">Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter />
      <div className="todo-list">
        <TodoList
          key={todos.id}
          todos={todos}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      </div>
      <div className="todo-form">
        <TodoForm key={todos.id} addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;

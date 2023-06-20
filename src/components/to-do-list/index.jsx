import React from "react";
import Button from "../button";
import "./index.css";

const TodoList = ({ todos, removeTodo, completeTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todos.id}
          className="todo"
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
          <div>
            <p>{todo.text}</p>
            <p>({todo.category})</p>
          </div>
          <div className="content-button">
            <Button
              type={"secondary"}
              text={"Completar"}
              onClick={() => completeTodo(todo.id)}
            />
            <Button
              type={"tertiary"}
              text={"Deletar"}
              onClick={() => removeTodo(todo.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

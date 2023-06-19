import React from "react";
import Button from "../button";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div>
          <div className="content-text">
            <p key={todo.id}>{todo.text}</p>
            <p key={todo.id}>{todo.category}</p>
          </div>
          <div className="content-button">
            <Button type={"secondary"} text={"Completar"} />
            <Button type={"tertiary"} text={"Deletar"} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

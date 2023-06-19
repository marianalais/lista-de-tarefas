import React from "react";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.text}</p>
      ))}
    </div>
  );
};

export default TodoList;

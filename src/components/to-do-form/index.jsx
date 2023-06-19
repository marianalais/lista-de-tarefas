import { useState } from "react";
import Button from "../button";
import Input from "../input";
import "./index.css";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className="content-form">
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type={"text"}
          placeholder={"Digite o título"}
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="select"
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <Button type={"primary"} text={"Criar Tarefa"} />
      </form>
    </div>
  );
};

export default TodoForm;

import React from "react";
import Button from "../button";
import Input from "../input";

const TodoForm = ({ todos }) => {
  return (
    <div className="content-form">
      <h2>Criar tarefa:</h2>
      <form>
        <Input type={"text"} placeholder={"Digite o título"} />
        <select>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <Button text={"Criar"} />
      </form>
    </div>
  );
};

export default TodoForm;

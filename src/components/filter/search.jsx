import React from "react";
// import Button from "../button";

const Filter = () => {
  return (
    <div className="search">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select className="select">
            <option value="All">Todas</option>
            <option value="Completas">Completas</option>
            <option value="Incompletas">Incompletas</option>
          </select>
        </div>
        {/* <div>
          <p>Ordem Alfabética:</p>
          <Button type={"primary"} text={"Asc"} />
          <Button type={"primary"} text={"Desc"} />
        </div> */}
      </div>
    </div>
  );
};
export default Filter;

//ordem alfabetica e por criaçao

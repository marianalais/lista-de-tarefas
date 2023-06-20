import React from "react";
import Input from "../input";

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2>Pesquisar:</h2>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type={"text"}
        placeholder={"Digite para pesquisar..."}
      />
    </div>
  );
};
export default Search;

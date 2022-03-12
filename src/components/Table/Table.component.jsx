import React from "react";
import TableBody from "./Table-Body";
import TableHeader from "./Table-Header";

const Table = ({ movies, columns, onDelete }) => {
  return (
    <div>
      <table>
        <TableHeader columns={columns} />
        <TableBody movies={movies} columns={columns} onDelete={onDelete} />
      </table>
    </div>
  );
};

export default Table;

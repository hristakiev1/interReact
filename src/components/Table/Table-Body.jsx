import React from "react";

const TableBody = ({ movies, columns, onDelete }) => {
  const renderCell = (column, movie, indx) => {
    if (column.path == "image") {
      return (
        <td key={indx + movie._id}>
          <img src={movie.imageUrl} />
        </td>
      );
    }
    if (column.path == "button") {
      return (
        <td key={indx + movie._id}>
          <button
            style={{
              backgroundColor: "red",
              border: "none",
              color: "white",
              padding: "0.5rem",
            }}
            onClick={() => onDelete(movie)}
          >
            Delete
          </button>
        </td>
      );
    }

    return <td key={indx + movie._id}>{movie[column.path]}</td>;
  };

  return (
    <tbody>
      {movies.map((movie) => (
        <tr key={movie._id}>
          {columns.map((column, indx) => renderCell(column, movie, indx))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

import React from "react";

const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column, indx) => (
          <th key={indx}>{column.name}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

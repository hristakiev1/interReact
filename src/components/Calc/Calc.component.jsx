import React, { useState } from "react";

const Calc = () => {
  const [number, setNumber] = useState(0);

  const buttonStyle = {
    pading: "0.6rem",
    backgroundColor: "grey",
    color: "white",
    border: "0",
    width: "50px",
    height: "40px",
  };

  const handleCalc = (action) => {
    const newNumber =
      action === "increment"
        ? number + 1
        : action === "decrement"
        ? number - 1
        : (number = 0);

    setNumber(newNumber);
    console.log(newNumber);
  };

  return (
    <div>
      <h1>This is calculator</h1>
      <button onClick={() => setNumber(0)}>Reset</button>
      <div style={{ margin: "2rem" }}>
        {number}
        <span style={{ margin: "1rem" }}>
          <button style={buttonStyle} onClick={() => handleCalc("increment")}>
            +
          </button>{" "}
          <button style={buttonStyle} onClick={() => handleCalc("decrement")}>
            -
          </button>
        </span>
      </div>
    </div>
  );
};

export default Calc;

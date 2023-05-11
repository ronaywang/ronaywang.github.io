import React, { useId, useState } from "react";
import "./septogram.css";
import Gameplay from "./gameplay";
import Clues from "./clues";
import Solutions from "./solutions";

function Grid() {
  const rows = 8;
  const cols = 6;
  const grid = [];

  for (let row = 0; row < rows; row++) {
    const currentRow = [];
    for (let col = 0; col < cols; col++) {
      const ID = col + row * 6 + 1;
      currentRow.push(
        <span
          key={`${row}-${col}`}
          className="cell"
          onClick={() =>
            prompt(Clues(ID), "Submit a guess based on the above clue.")
          }
        >
          {ID}
        </span>
      );
    }
    grid.push(
      <div key={row} className="row">
        {currentRow}
      </div>
    );
  }

  return <div className="grid">{grid}</div>;
}

export default Grid;

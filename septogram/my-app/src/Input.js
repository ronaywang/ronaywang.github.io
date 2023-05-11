import React, { useEffect, useState } from "react";
import "./septogram.css";
import useData from "./data.js";

function Input(ID) {
  return (
    <body>
      <div class="text-input">
        <input
          type="text"
          id="input1"
          placeholder="Submit a guess based on the clue."
        />
        <label for="input1">name</label>
      </div>
    </body>
  );
}

export default Input;

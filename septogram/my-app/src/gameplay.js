import Clues from "./clues";
import Solutions from "./solutions";
import { useId, useState } from "react";

import "./septogram.css";
function Gameplay(ID, props) {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(text);
    setText("");
    if (Solutions(submitted, Clues(ID))) {
      console.log("Correct!");
    }
  }
  return (
    <body>
      console.log("hi");
      <div class="text-input">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="input1"
            placeholder="Submit a guess based on the clue."
            value={text}
            onChange={handleChange}
          />
          <label for="input1">{Clues(ID)}</label>
          <input type="submit" value="add" />
        </form>
      </div>
    </body>
  );
}

export default Gameplay;

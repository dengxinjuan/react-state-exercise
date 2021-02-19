import data from "./data";
import { useState } from "react";
import "./App.css";

const choiceRandom = (arr) => {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
};

const EightBall = ({ answer }) => {
  const currentChoice = choiceRandom(answer);
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const [count, setCount] = useState(0);

  function change() {
    const { msg, color } = currentChoice;
    setMsg(msg);
    setColor(color);
    setCount(count + 1);
  }

  function restart() {
    setMsg("Restart!");
    setColor("blue");
    setCount(0);
  }

  return (
    <>
      <h1>You clicked: {count}</h1>
      <div style={{ backgroundColor: color }} className="Ball" onClick={change}>
        {msg}
      </div>
      <button onClick={restart}>restart</button>
    </>
  );
};

export default EightBall;

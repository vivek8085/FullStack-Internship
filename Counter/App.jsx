import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const addValue = () => {
    setCounter(counter + Number(inputValue));
  };

  const delValue = () => {
    setCounter(0);
    setInputValue(0);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <input
        type="number"
        placeholder="Enter value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <button className="btn" onClick={increment}>
        Increment
      </button>
      <button className="btn" onClick={decrement}>
        Decrement
      </button>
      <br />
      <button className="btn" onClick={addValue}>
        Add Value
      </button>
      <button className="btn" onClick={delValue}>
        Reset
      </button>
    </div>
  );
}

export default App;

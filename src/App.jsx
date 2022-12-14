import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  const PlusOne = (event) => {
    const inputValue = event.target.value;
    setValue(value + 1);
  };

  const MinusOne = (evnet) => {
    setValue(value - 1);
  };

  return (
    <div>
      <p>{value}</p>
      <button onClick={PlusOne}>+1</button>
      <button onClick={MinusOne}>-1</button>
      <p/>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        더하기 일
      </button>
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        빼기 일
      </button>
    </div>
  );
}

export default App;

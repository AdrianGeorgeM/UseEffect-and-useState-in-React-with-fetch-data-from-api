import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import Counter from "./Counter";
import TodoList from "./TodoList";
import Api from "./api";
import Api2 from "./api2";

function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div className='App'>
      {/* <Api /> */}
      <Api2 />
    </div>
  );
}

export default App;

//  {/* <h1> Our App</h1>
//     {/* <TodoList /> */}
//     <Counter />
//     <button onClick={() => setShowCounter(!showCounter)}>
//       {showCounter ? "Hide Counter" : "Show Counter"}
//     </button>
//     {showCounter && <Counter />}
//      */}

// dependencies:
import React from "react";
// child components:
// component:
const App = ({ count, handleIncrementClick, handleDecrementClick }) => (
    <>
        <h1>{"hello world! " + count}</h1>
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick={handleDecrementClick}>Decrement</button>
    </>
);
export default App;

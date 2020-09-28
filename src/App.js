import React, { useState } from "react";
import "./App.css";

/*
1. Add a function that will change the state of the diamond div's color.
2. I have already preset some css into the App.css file to reflect the diamond properties, but not the color, color has been added inline.
3. add functionality to the button to change the color of the diamond with 'color' state.
4. use the hexcode '#b9f2ff' for one of the colors, and 'pink' for the other
*/
function App() {
  let color
  function handleClick() {
    //change the state here
  }
  return (
    <div className="app">
      <div className="diamond" style={{backgroundColor: color || '#b9f2ff' /* use state to change value */}} data-testid='diamond'></div>
      <button onClick={handleClick}>diamond changer</button>
    </div>
    );
}

export default App;
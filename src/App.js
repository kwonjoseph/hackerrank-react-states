import React, { Component, useState } from "react";
import "./App.css";

/*
1. Add an event handler that will change the state of the diamond into a circle.
2. I have already preset some css into the App.css file to reflect the diamond properties, but you will need to make it transform.
3. add an event handler to the button to change the state of the diamond to a circle and back to a diamond if pressed again.
4. use the border-radius css property and set it to '50%' to change the div into a circle.
*/
function App() {
const [ borderRadius, setBorderRadius ] = useState('0%')
  return (
    <div className="app">
      <div className="diamond" style={{backgroundColor: '#b9f2ff', borderRadius: borderRadius}} data-testid='object'></div>
      <button onClick={() => null}>morpher</button>
    </div>
    );
}

export default App;
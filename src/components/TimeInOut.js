import React from "react";
//import ReactDOM from 'react-dom';
import CurrentTime from "./CurrentTime";
//import {employees} from 
function TimeInOut() {

    function handleClick(event){
      console.log(`Current time is ${CurrentTime}.`);
    }
  return (
    <div>
        <button onClick={() => handleClick}>
        Time In
        </button>
        <button onClick={() => handleClick}>
        Time Out
        </button>      
    </div>
  )
}

export default TimeInOut

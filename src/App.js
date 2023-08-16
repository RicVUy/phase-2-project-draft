import React from "react";
import Header from "./components/Header";
import TimeInOut from "./components/TimeInOut";

const employees = [
  { id: 1,
    name: "Ricardo",
    position: "Manager",
    dayOff: "Saturday, Sunday",
    payPerHour: 40,
    timeInEvents : [],
    timeOutEvents : []
  },
  { id: 1,
    name: "Edna",
    position: "Asst. Manager",
    dayOff: "Friday, Saturday",
    payPerHour: 35,
    timeInEvents : [],
    timeOutEvents : []
  }
]

function App() {
  return (
    <span>
    <div id="main-content">
      <Header/>
    </div>
    <div id="time-in-out">
      <TimeInOut/>
    </div>
    </span>
  );
}

export default App;

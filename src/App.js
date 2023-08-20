import React, { useState } from "react";
import Header from "./components/Header";
import TimeInOut from "./components/TimeInOut";
import EmployeeCard from "./components/EmployeeCard";
import { employees as employeesArray } from "./components/data"


function App() {
const [ employees, setEmployees ] = useState(employeesArray)
const [ user, setUser ] = useState(null) 

const employeeList = employees.map((empObj) => {
  return (
    <EmployeeCard
    key= {empObj.id}
    name={empObj.name}
    schedule={empObj.schedule}
    />
  )
})
  return (
    <span>
    <div id="main-content">
      <Header user={user} setUser={setUser}
              employees={employees} setEmployees={setEmployees} />
      {user ? <p>Welcome, {employeesArray.name}</p> :<em>Please log in!</em>}
    </div>
    <div id="time-in-out">
      <TimeInOut/>
    </div>
    <div id="employee">
     <p>{employeeList}</p>
    </div>
    </span>
  );
}

export default App;

import React, { useState } from "react";
import Header from "./components/Header";
import TimeInOut from "./components/TimeInOut";
import EmployeeCard from "./components/EmployeeCard";
import EmployeeForm from "./components/EmployeeForm";
import { employees as employeesArray } from "./components/data"


function App() {
const [ employees, setEmployees ] = useState(employeesArray)
const [ user, setUser ] = useState(null) 

const employeeList = employees.map((empObj) => {
  return (
    <EmployeeCard
    key= {empObj.id}
    name={empObj.name}
    image={empObj.image}
    password={empObj.password}
    position={empObj.position}
    schedule={empObj.schedule}
    hoursOfWork={empObj.hoursOfWork}
    payPerHour={empObj.payPerHour}
    timeInEvents={empObj.timeInEvents}
    timeOutEvents={empObj.timeOutEvents}
    payForThisWeek={empObj.payForThisWeek}
    />
  )
})
  function addEmployee(empObj) {
    console.log(empObj)
    setEmployees([...employees, empObj])
  }
  return (
    <span>
    <div id="main-content">
      <Header user={user} setUser={setUser}
              employees={employees} setEmployees={setEmployees} />
      {user ? <p>Welcome, {user.username}</p> :<em>Please log in!</em>}
      
    </div>
    <div id="employeeForm">
      <EmployeeForm addEmployee={addEmployee}/>
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

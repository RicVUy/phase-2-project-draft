import React, { useState } from "react";
import Header from "./components/Header";
import TimeIn from "./components/TimeIn";
import TimeOut from "./components/TimeOut";
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
   setEmployees([...employees, empObj])
  }
  return (
    <span>
    <div id="main-content">
      <Header user={user} setUser={setUser}
              employees={employees} setEmployees={setEmployees} />
      {user ? <p>Welcome, {user.username}</p> :<p>Please log in!</p>}
      
    </div>
    
    <div id="time-in-out">
      <TimeIn/>
      <TimeOut/>
    </div>
    <div id="employee">
     <p>{employeeList}</p>
    </div>
    <div id="employeeForm">
      <EmployeeForm addEmployee={addEmployee}/>
      </div>
    
    </span>
  );
}

export default App;

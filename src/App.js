import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TimeIn from "./components/TimeIn";
import TimeOut from "./components/TimeOut";
import EmployeeCard from "./components/EmployeeCard";
import EmployeeForm from "./components/EmployeeForm";
import EditFormSection from "./components/EditFormSection";
import EmployeeDetails from "./components/EmployeeDetails";
//import Employee from "./components/Employee";
//import { employees as employeesArray } from "./components/data"


function App() {
const [ employees, setEmployees ] = useState([])
const [employee, setEmployee] = useState({})
const [ user, setUser ] = useState({}) 

useEffect(() => {
  fetch("http://localhost:4000/employees")
    .then((r) => r.json())
    .then((employees) => setEmployees(employees));
}, []);




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
  function handleAddEmployee(empObj) {
   setEmployees([...employees, empObj])
  }

/*function handleDeleteEmployee(deletedEmployee) {
const updatedEmployees = items.filter((employee) => employee.id !== deletedEmployee.id);
setEmployees(updatedEmployees);
}*/
useEffect(() => {
  fetch("http://localhost:4000/employees/1")
  .then(resp => resp.json())
  .then(data => setEmployee(data))
},[])

const onUpdateEmployee = (updatedEmployee) => {
  setEmployee(updatedEmployee)
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
      <EmployeeForm onAddEmployee={handleAddEmployee}/>
       </div>
       <div className="App">
     <h1>Employees</h1>
     </div>
     <main className="main-section">
      <p className = "employee-details">
     <EmployeeDetails employee={employee}/>
     </p>
     <p className="editFormSection">
     <EditFormSection handleUpdateEmployee={onUpdateEmployee}/>
     </p>
     </main>
    </span>
  );
}

export default App;

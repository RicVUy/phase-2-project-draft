import React from "react";

function EmployeeCard ( {
    name,
    position,
    schedule,
    hoursOfWork,
    payPerHour,
    timeInEvents,
    timeOutEvents
}) {
    return (
     <div className="card">
        <ul>
        <li>{name}</li>
        <li>position:{position}</li>
        <li>schedule:{schedule}</li>
        <li>hoursOfWork:{hoursOfWork}</li>
        <li>payPerHour:{payPerHour}</li>
        <li>timeInEvents:{timeInEvents}</li>
        <li>timeOutEvents:{timeOutEvents}</li>
        </ul>
     </div>   
    )
}
export default EmployeeCard
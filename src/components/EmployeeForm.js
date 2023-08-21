import React, { useState } from "react"
import { getNextId } from './data'

function EmployeeForm({ addEmployee}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [password, setPassword] = useState("")
    const [position, setPosition] = useState("")
    const [schedule, setSchedule] = useState("")
    const [workTime, setWorkTime] = useState("")
    const [payPerHour, setPayPerHour] = useState("")
    const [payForThisWeek, setPayForThisWeek] = useState("")
    
    function handleSubmit(event) {
        event.preventDefault()
        const newEmployee = {
            id: getNextId(),
            name,
            image,
            password,
            position,
            schedule,
            workTime,
            payPerHour,
            timeInEvents : [],
            timeOutEvents : [],
            payForThisWeek,
        }
        
        addEmployee(newEmployee)
    }
    
    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                <label htmlFor="image">Image</label>
                <input type="text" id="image" value={image} onChange={e => setImage(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="text" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                <label htmlFor="position">Position</label>
                <input type="text" id="position" value={position} onChange={e => setPosition(e.target.value)} />
                <label htmlFor="schedule">Schedule</label>
                <input type="text" id="schedule" value={schedule} onChange={e => setSchedule(e.target.value)} />
                <label htmlFor="workTime">Worktime</label>
                <input type="text" id="workTime" value={workTime} onChange={e => setWorkTime(e.target.value)} />
                <label htmlFor="payPerHour">Pay per Hour</label>
                <input type="text" id="payPerHour" value={payPerHour} onChange={e => setPayPerHour(e.target.value)} />
                <label htmlFor="payForThisWeek">Pay for this week</label>
                <input type="text" id="payForThisWeek" value={payForThisWeek} onChange={e => setPayForThisWeek(e.target.value)} />
                <button type="submit">Add Employee</button>
            </form>
        </div>
    )
}

export default EmployeeForm
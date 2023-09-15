import React from 'react'
import Detail from './Detail'
import { v4 as uuidv4 } from 'uuid';

const EmployeeDetails = ({employee}) => {
  console.log(employee)
  return (
    <>
    <h2>Employee Details</h2>
    <div>{Object.entries(employee).map(entry => <Detail key={uuidv4()} name={entry[0]} value={entry[1]}/>)}</div>
    </>
  )
}

export default EmployeeDetails
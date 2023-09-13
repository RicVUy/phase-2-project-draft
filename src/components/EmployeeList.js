
import { employees as employeesArray } from "./components/data"


function EmployeeList(){
const [employees, setEmployees] = useState([]);
return (
    <div>
{employees.map((empObj) => (
    
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
  )}
  </div>
) 

}
export default EmployeeList
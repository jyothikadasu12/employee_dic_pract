import type {Employee} from "../types"

interface EmployeeListProps{
    employees: Employee[];
}

export default function EmployeeList({employees}: EmployeeListProps){
    if (employees.length === 0 ) {
        return <p> no employee found</p>
    }

    return(
        <div className = "employee-grid">
            { employees.map((employee) => (
                 <article className="employee-card" key={employee.id}>
          <h2>
            {employee.firstName} {employee.lastName}
          </h2>
          <p>{employee.email}</p>
          <p>
            Department: {employee.company.department}
          </p>
        </article>
            ))} </div>

    )
}
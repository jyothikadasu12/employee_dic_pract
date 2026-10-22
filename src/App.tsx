
import { useEffect, useState } from "react";
import { getEmployee } from "./api";
import SearchBox from "./components/SearchBox";
import EmployeeList from "./components/EmployeeList";
import type { Employee, RequestState } from "./types";

export default function App() {
  const [search, setSearch] = useState("");
  const [request, setRequest] = useState<RequestState>({
    status: "loading",
  });

  useEffect(() => {
    async function loadEmployees() {
      try {
        
        const employees: Employee[] = await getEmployee();

        setRequest({
          status: "success",
          employees,
        });
      } catch {
        setRequest({
          status: "error",
          message: "Could not load employees. Please try again.",
        });
      }
    }

    loadEmployees();
  }, []);

  const filteredEmployees =
    request.status === "success"
      ? request.employees.filter((employee) =>
          `${employee.firstName} ${employee.lastName}`
  .toLowerCase()
  .includes(search.toLowerCase())
        )
      : [];

  return (
    <main className="page">
      <header className="page-header">
        <p className="eyebrow">TEAM DIRECTORY</p>
        <h1>Employee Directory</h1>
        <p>Find your colleagues in one place.</p>
      </header>

      <SearchBox value={search} onSearch={setSearch} />

      {request.status === "loading" && (
        <p>Loading employees...</p>
      )}

      {request.status === "error" && (
        <p role="alert">{request.message}</p>
      )}

      {request.status === "success" && (
        <>
          <p>{filteredEmployees.length} employees found</p>
          <EmployeeList employees={filteredEmployees} />
        </>
      )}
    </main>
  );
}

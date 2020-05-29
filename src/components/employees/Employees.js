import React, { useState, useEffect } from "react";
import APIManager from "../../modules/APIManager";
import EmployeeCard from "./EmployeeCard";

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    APIManager.getResource("employees").then((result) => setEmployees(result));
  }, []);

  return (
    <>
      <header>
        <h1>Employees</h1>
      </header>
      <div className="card_container horz">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </>
  );
}

export default Employees;

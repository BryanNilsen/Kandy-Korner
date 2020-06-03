import React, { useState, useEffect } from "react";
import APIManager from "../../modules/APIManager";
function EmployeeDetail(props) {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    location: {
      name: "",
      address: "",
      phone: "",
    },
  });

  useEffect(() => {
    APIManager.getResourceByIdWithExpand(
      "employees",
      props.employeeId,
      "location"
    ).then((result) => {
      setEmployee(result);
    });
  }, [props.employeeId]);

  const deleteEmployee = () => {
    APIManager.deleteResource("employees", employee.id).then((res) =>
      props.history.push("/employees")
    );
  };

  return (
    <div className="card vert">
      <div>
        <img
          src={`/images/employees/${employee.img}`}
          alt={`${employee.firstName} ${employee.lastName}`}
        />
      </div>
      <h2>
        {employee.firstName} {employee.lastName}
      </h2>
      <h3>Address: {employee.address}</h3>
      <h3>Phone: {employee.phone}</h3>
      <h3>Works at: {employee.location.name}</h3>
      {props.userIsSupervisor && (
        <button onClick={deleteEmployee}>terminate employment</button>
      )}
    </div>
  );
}

export default EmployeeDetail;

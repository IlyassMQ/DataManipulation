import {employees} from "./dataset.js";



function getFirstEmployeeFirstName(employees) {
    return employees[0].firstName;
}

console.log(getFirstEmployeeFirstName(employees));

function getLastEmployeeLastName(employees) {
    return employees[employees.length - 1].lastName;
}

console.log(getLastEmployeeLastName(employees));





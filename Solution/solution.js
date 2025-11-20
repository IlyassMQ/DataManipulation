import {employees} from "dataset.js";



const getFirstEmployeeFirstName = (employees) => employees[0].firstName
console.log(getFirstEmployeeFirstName(employees))

const getLastEmployeeLastName = (employees) => employees[employees.length - 1].lastName
console.log(getLastEmployeeLastName(employees))




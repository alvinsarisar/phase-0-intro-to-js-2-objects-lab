// Write your solution in this file!
// Initial employee object
let employee = {
    name: "Alvin Sarisar",
    streetAddress: "254 Tom Mboya"
};

// Function to non-destructively update employee with a key and value
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Function to destructively update employee with a key and value
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to non-destructively delete a key from the employee object
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to destructively delete a key from the employee object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Testing the functions
console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "Juja Road 25")); 
console.log(employee); // Should log the original employee object without changes

console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "THika 24")); 
console.log(employee); // Should log the updated employee object

console.log(deleteFromEmployeeByKey(employee, "name")); // Should log a new object without the name property
console.log(employee); // Should log the original employee object with the name property

console.log(destructivelyDeleteFromEmployeeByKey(employee, "name")); // Should log the updated employee object without the name property
console.log(employee); // Should log the updated employee object without the name property

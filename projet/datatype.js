"use strict";
let Lname = 'john';
//Lname = 10;
Lname = "Santosh";
let newname = Lname.toUpperCase();
console.log(newname);
let age;
age = 25;
age = 25.5;
let dob = "25";
let result = parseInt(dob);
let isValid = false;
console.log(isValid); //Si valeur non affecter return undefined
let empList;
empList = ["Santosh", "SAntosh", "Santosh"];
let numList;
numList = [1, 2, 3, 4];
let results = numList.filter((num) => num > 2); //return number >2 in the list
let num = numList.find((num) => num === 2);
let emp = empList.find((emp) => emp === "Santosh");
let sum = numList.reduce((acc, num) => acc + num); // calcul la somme du tableau
console.log(results);
console.log(num);
console.log(emp);
console.log(sum);
let c = 2 /* Color.Blue */;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
;
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
swapNumbs[1];
let department;
department = "Test";
department = 10;

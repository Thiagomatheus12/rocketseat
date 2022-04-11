let weight;
console.log(typeof weight);

let name = "John"; // String
let age = 25; // Number
let stars = 4.8; // Number (float)
let isSubscribed = true; // Boolean

let student = {
    name: "John",
    age: 25,
    weight: 74.8,
    isSubscribed: true,
}; // Object

console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg`);

let students = []; // Array

students = [
    student
]

console.log(students[0])

const john = {
    name: "John",
    age: 25,
    weight: 74.8,
    isSubscribed: true,
}

students = [
    student,
    john
]

console.log(students[1])
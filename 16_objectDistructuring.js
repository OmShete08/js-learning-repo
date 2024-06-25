const student = {
    stdName: "Jenny",
    rollNum: 107,
    city: "Pune",
    isMarried: false
}

// let stdName = student.stdName;
// let city = student.city;
// let isMarried = student.isMarried;

// Object Destructuring
var {stdName, city, isMarried} = student;
console.log(`Student Name:  ${stdName}, City: ${city}, Married Status: ${isMarried}`);

// Object Destructuring with default values
var {stdName, city, isMarried, PIN=411057} = student;
console.log(`Student Name:  ${stdName}, City: ${city}, Married Status: ${isMarried}, PIN: ${PIN}`);
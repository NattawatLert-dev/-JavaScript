// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

//Ex.1
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

console.log(numbers.sort((a, b) => a - b)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers.sort((a, b) => b - a)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

//Ex.2
const people = [{ name: "Spongebob", age: 30, gpa: 3.0 },
{ name: "Patrick", age: 37, gpa: 1.5 },
{ name: "Squidward", age: 51, gpa: 2.5 },
{ name: "Sandy", age: 27, gpa: 4.0 }];

people.sort((a, b) => a.age - b.age);
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);
/*
{ name: "Sandy", age: 27, gpa: 4.0 }
{ name: "Spongebob", age: 30, gpa: 3.0 },
{ name: "Patrick", age: 37, gpa: 1.5 },
{ name: "Squidward", age: 51, gpa: 2.5 },
*/
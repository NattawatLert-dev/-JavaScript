// arrow functions = วิธีเขียน Function Expression แบบย่อเหมาะสำหรับฟังก์ชันที่เรียบง่าย
//                   และใช้งานเพียงครั้งเดียว
//                   (parameters) => some code

//Ex.1
const hello = () => console.log("Hello");

hello(); // Hello

//Ex.2
const hello = (name) => console.log("Hello" + name);

hello("Tle"); // Hello Tle

//Ex.3
const hello = (name, age) => {
    console.log("Hello" + name)
    console.log("You are " + age + " years old")
};

hello("Tle", 21);

//Ex.4 
setTimeout(() => console.log("hello"), 3000);

//Ex.5
const numbers = [1, 2, 3, 4, 5, 6];

const square = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(square);
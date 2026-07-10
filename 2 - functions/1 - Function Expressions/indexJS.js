// function declaration = การสร้างฟังก์ชันเพื่อเก็บชุดคำสั่งไว้ใช้งานซ้ำ
//                        โดยแต่ละฟังก์ชันมีหน้าที่เฉพาะของตัวเอง

//Ex.1
function hello() {
    console.log("Hello");
}

//Ex.2
const numbers = [1, 2, 3, 4, 5];
const square = numbers.map(square);   // [1, 4, 9, 16, 25]

console.log(square);

function square(element) {
    return Math.pow(element, 2);
}

// function expressions = การสร้างฟังก์ชันแล้วนำไปเก็บไว้ในตัวแปร
//                        เพื่อให้สามารถเรียกใช้งานผ่านตัวแปรนั้นได้

// 1. Callbacks in asynchronous operations
//    = Callback ที่ใช้กับการทำงานแบบอะซิงโครนัส (ไม่ต้องรอให้เสร็จก่อน)

// 2. Higher-Order Functions
//    = ฟังก์ชันที่รับฟังก์ชันอื่นเป็นพารามิเตอร์
//      หรือคืนค่ากลับเป็นฟังก์ชัน

// 3. Closures
//    = ฟังก์ชันที่สามารถเข้าถึงตัวแปร
//      จาก Scope ภายนอกได้ แม้ว่าฟังก์ชันภายนอกจะทำงานเสร็จแล้ว

// 4. Event Listeners
//    = ตัวดักจับเหตุการณ์ (Event)
//      เมื่อเกิดเหตุการณ์ที่กำหนด จะเรียกฟังก์ชันที่ผูกไว้

//Ex.1
const hello = function () {
    console.log("Hello");
}

hello();

//Ex.2
setTimeout(function () {
    console.log("Hi");
}, 3000);

//Ex.3
const numbers = [1, 2, 3, 4, 5];

const square = numbers.map(function (element) {
    return Math.pow(element, 2)
});

const evenNums = numbers.filter(function (element) {
    return element % 2 === 0;
});

const total = numbers.reduce(function (accumulator, element) {
    return accumulator + element;
});

console.log(square); // [1, 4, 9, 16, 25]
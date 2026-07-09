// forEach() = เมธอดที่ใช้วนลูปสมาชิกทุกตัวภายใน Array และนำฟังก์ชันที่กำหนด (Callback)
//             ไปทำงานกับสมาชิกแต่ละตัว

//             รูปแบบการใช้งาน
//             array.forEach(callback)
//             Callback สามารถรับพารามิเตอร์ได้ 3 ตัว คือ
//             element = ค่าของสมาชิกปัจจุบัน
//             index   = ตำแหน่ง (Index) ของสมาชิกปัจจุบัน
//             array   = Array ต้นฉบับทั้งหมด

//Ex.1
let number = [1, 2, 3, 4, 5];

number.forEach(display);

function display(element) {
    console.log(element);
}

// 1
// 2
// 3
// 4
// 5

//Ex.2
let number = [1, 2, 3, 4, 5];

number.forEach(double);
number.forEach(display);

function double(element, index, array) {
    array[index] = element * 2;
}

function square(element, index, array) {
    array[index] = Math.pow(element, 2);
}

function display(element) {
    console.log(element);
}

// 2
// 4
// 6
// 8
// 10

//Ex.3
let fruits = ["apple", "orange", "banana"];

fruits.forEach(capitalize);
fruits.forEach(display);

function uppercase(element, index, array) {
    array[index] = element.toUpperCase();
}

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element) {
    console.log(element);
}

// Apple
// Orange
// Banana
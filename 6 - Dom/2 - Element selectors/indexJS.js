// Element Selectors = เมธอด (Methods) ที่ใช้สำหรับเลือก (Target)
//                     และจัดการ (Manipulate) Element ต่าง ๆ ใน HTML
//
//                     เมธอดเหล่านี้ช่วยให้เราสามารถเลือก Element หนึ่งตัวหรือหลายตัวจาก DOM
//                     (Document Object Model) เพื่อแก้ไขหรือใช้งานผ่าน JavaScript

// 1. document.getElementById()
//    เลือก Element จากค่า id
//    คืนค่าเป็น Element หรือ null หากไม่พบ

// 2. document.getElementsByClassName()
//    เลือก Element ทั้งหมดที่มี class ที่กำหนด
//    คืนค่าเป็น HTMLCollection

// 3. document.getElementsByTagName()
//    เลือก Element ทั้งหมดที่มีชื่อแท็กที่กำหนด
//    เช่น div, p, h1
//    คืนค่าเป็น HTMLCollection

// 4. document.querySelector()
//    เลือก Element ตัวแรกที่ตรงกับ CSS Selector
//    คืนค่าเป็น Element หรือ null หากไม่พบ

// 5. document.querySelectorAll()
//    เลือก Element ทั้งหมดที่ตรงกับ CSS Selector
//    คืนค่าเป็น NodeList

//Ex.1
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

//Ex.2
const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "yellow"; // ตัวเดียว

/*
for (let fruit of fruits) { // ทั้งหมด
    fruit.style.backgroundColor = "yellow";
}
*/

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});

console.log(fruits);

//Ex.3
/*
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

h4Elements[0].style.backgroundColor = "red";

for (let liElement of liElements) {
    liElement.style.backgroundColor = "lightgreen";
}

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "red";
});
*/

//Ex.4
const element = document.querySelector(".fruits");

element.style.backgroundColor = "lightgreen";

//EX.5
const foods = document.querySelectorAll("li");

foods[5].style.backgroundColor = "lightgreen";

Array.from(foods).forEach(food => {
    food.style.backgroundColor = "lightblue";
});
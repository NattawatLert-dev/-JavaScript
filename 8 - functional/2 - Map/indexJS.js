// .map() = รับ callback function เข้ามา แล้วนำฟังก์ชันนั้น
//          ไปใช้กับทุก element ใน array
//          จากนั้นจะคืนค่า (return) เป็น array ใหม่

//Ex.1
const numbers = [1, 2, 3, 4, 5];
const square = numbers.map(square);   // [1, 4, 9, 16, 25]
const cube = numbers.map(cube);       // [1, 8, 27, 64, 125]

console.log(square);

function square(element) {
    return Math.pow(element, 2);
}

function cude(element) {
    return Math.pow(element, 3);
}

//Ex.2
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

function formatDates(element) {
    const parts = element.split("-");
    return parts[1] + "/" + parts[2] + "/" + parts[0];
}

//Ex.3
const number = [1, 2, 3, 4];

const doubled = number.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]
console.log(number); // [1, 2, 3, 4] (อาร์เรย์เดิมไม่เปลี่ยน)
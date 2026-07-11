// ES6 Module = ไฟล์ภายนอกที่เก็บโค้ดที่สามารถนำกลับมาใช้ซ้ำได้
//              และสามารถนำเข้า (import) ไปใช้งานในไฟล์ JavaScript อื่น ๆ ได้
//              ช่วยให้สามารถเขียนโค้ดเพียงครั้งเดียว แล้วนำไปใช้ได้กับหลายแอปพลิเคชัน
//              ภายใน Module สามารถมีตัวแปร (variables), คลาส (classes),
//              ฟังก์ชัน (functions) และองค์ประกอบอื่น ๆ ได้
//              ES6 Module ถูกเพิ่มเข้ามาเป็นส่วนหนึ่งของมาตรฐาน ECMAScript 2015 (ES6)

import { PI, getCircumference, getArea, getVolume } from './mathUtil.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(circumference.toFixed(2) + "cm");
console.log(area.toFixed(2) + "cm");
console.log(volume.toFixed(2) + "cm");



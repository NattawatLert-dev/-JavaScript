// String methods = เมธอด (Methods) ของ String ที่ช่วยให้เราสามารถจัดการและทำงานกับข้อความ (String) ได้

let userName = "Nattawat";

console.log(userName.charAt(0)); // N
console.log(userName.indexOf("t")); // 2
console.log(userName.lastIndexOfindexOf("t")); // 7
console.log(userName.length); // 7
console.log(userName.toUpperCase); // NATTAWAT
console.log(userName.toLowerCase); // nattawat
console.log(userName.repeat(2)); // nattawatnattawat
console.log(userName.includes(" ")); // false

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber); // 1234567890

phoneNumber = phoneNumber.padStart(15, "0");
console.log(phoneNumber); // 000123-456-7890

let x = " hello    ";
console.log(x.trim()) // hello

/*#################################################*/

// String Slicing = การสร้างสตริงย่อย (Substring)
//                  จากส่วนหนึ่งของสตริงเดิม
//                  string.slice(start, end)

const fullName = "Nattawat";

let firstname = fullName.slice(0, 3);
console.log(firstname); // Nat

const email = "fake1@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username); // fake1
console.log(extension); // gmail.com

/*#################################################*/

// Method Chaining = การเรียกใช้เมธอดหลาย ๆ เมธอดต่อกัน
//                   ในบรรทัดโค้ดเดียวอย่างต่อเนื่อง

let username = window.prompt("Enter your username: ");

// ------ NO METHOD CHAINING ------

username = username.trim();
let letter = username.charAt(0);
letter = letter.toLowerCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);

// ------ METHOD CHAINING ------

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

/*#################################################*/

// JSON = (JavaScript Object Notation) รูปแบบสำหรับแลกเปลี่ยนข้อมูล
//        ใช้ในการส่งและรับข้อมูลระหว่างเซิร์ฟเวอร์ (Server)
//        และเว็บแอปพลิเคชัน (Web Application)
//
//        ไฟล์ JSON สามารถอยู่ในรูปแบบ
//        { key: value }  // Object หรือ [value1, value2, value3]  // Array
//
//        JSON.stringify() = แปลง Object ของ JavaScript ให้เป็นข้อความ (JSON String)
//
//        JSON.parse() = แปลงข้อความ (JSON String) กลับมาเป็น Object ของ JavaScript

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];

const jsonString = JSON.stringify(names);

const jsonArray = JSON.parse(jsonString);

console.log(jsonString);
console.log(jsonArray);

// ดูตัวเดียว
fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value));


// ดูหลายตัว
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value))); //.Keyname = ดูแค่ value ที่ Key เก็บอยู่

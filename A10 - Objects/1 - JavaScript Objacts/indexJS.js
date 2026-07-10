// object = กลุ่มของข้อมูล (properties) และเมธอด (methods)
//          ที่เกี่ยวข้องกัน
//
//          ใช้แทนสิ่งต่าง ๆ ในโลกความเป็นจริง
//          เช่น คน (People), สินค้า (Products), สถานที่ (Places)
//
//          รูปแบบของ Object:
//
//          object = {
//              key: value,
//              function() {}
//          }

const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 20,
    isEmployed: true,
    sayHello: function () {
        console.log("Hi! I am Sprongbob")
    },
    eat: () => console.log("I am eating a krabby patty"),
}

console.log(person.firstName); // Spongebob
console.log(person.lastName);  // Squarepants
person.sayHello(); // Hi! I am Sprongbob
person.eat(); // I am eating a krabby patty
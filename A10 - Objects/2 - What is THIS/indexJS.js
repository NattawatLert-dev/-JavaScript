// this = อ้างอิง (Reference) ไปยัง Object ที่กำลังใช้งานอยู่
//        โดย Object ที่ this อ้างถึง จะขึ้นอยู่กับบริบท (Context)
//        ที่เรียกใช้งานในขณะนั้น
//
//        ตัวอย่าง:
//
//        person.name = this.name
//
//        ภายใน Object เดียวกัน this.name
//        หมายถึง property ชื่อ name ของ Object นั้น

const person1 = {
    name: "Spongebob",
    favFood: "Hamburger",
    sayHello: function () {
        console.log("Hi! I am " + this.name)
    }
}

person1.sayHello(); // Hi! I am Spongebob
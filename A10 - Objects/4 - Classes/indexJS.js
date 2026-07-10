// class = คุณสมบัติ (Feature) ที่เพิ่มเข้ามาใน ES6
//         ใช้สำหรับสร้าง Object ได้อย่างเป็นระเบียบ
//         อ่านง่าย และจัดการโค้ดได้สะดวกกว่า
//         การใช้ Constructor Function แบบเดิม
//
//         Class ช่วยให้สามารถใช้งานแนวคิด OOP ได้ง่ายขึ้น เช่น
//         - static keyword
//         - encapsulation (การซ่อนข้อมูล)
//         - inheritance (การสืบทอดคุณสมบัติ)
//         - polymorphism (การทำงานหลายรูปแบบ)

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log("Product: " + this.name);
        console.log("Price: " + this.price);
    }

    calculateTotal(saleTax) {
        return this.price + (this.price * saleTax);
    }
}


const saleTax = 0.05;

const product1 = new product1("Shirt", 19.99);
const product2 = new product2("Pants", 22.50);

product1.displayProduct();

const total = new product1.calculateTotal(saleTax);
console.log("TOtal price (with tax): " + total.toFixed(2));
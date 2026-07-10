// getter = เมธอดพิเศษที่ทำให้สามารถอ่าน (read) ค่าของ property ได้
// setter = เมธอดพิเศษที่ทำให้สามารถเขียนหรือกำหนดค่า (write) ให้ property ได้

// ใช้ตรวจสอบ (validate) และปรับเปลี่ยน (modify) ค่าในขณะที่มีการอ่านหรือเขียน property

//Ex.1
class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.log("Width must be a positive number");
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.log("Height must be a positive number");
        }
    }

    get width() {
        return this._width.toFixed(1) + "cm";
    }

    get height() {
        return this._height.toFixed(1) + "cm";
    }

    get area() {
        return (this._height * this._width).toFixed(1) + "cm^2";
    }
}

const rectangle = new Rectangle(3, 4);

rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width);  // 5.0cm
console.log(rectangle.height); // 6.0cm
console.log(rectangle.area);   // 30.0cm^2

//Ex.2
class Person {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }
        else {
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        }
        else {
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        }
        else {
            console.error("Age must be a non-negative number");
        }
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get fullName() {
        return this._firstName + " " + this._lastName;
    }

    get age() {
        return this._age;
    }

}

const person = new Person("Spongebob", "Squarepants", 30);

console.log(person.firstName); // Spongebob
console.log(person.lastName);  // Squarepants
console.log(person.fullName);  // Spongebob Squarepants
console.log(person.age);       // 30
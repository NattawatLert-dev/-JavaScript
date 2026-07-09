// IF STATEMENT = ถ้าเงื่อนไขเป็นจริง ให้รัน (execute) โค้ดบางส่วน
//                แต่ถ้าเงื่อนไขไม่เป็นจริง ให้ทำอย่างอื่นแทน

let age;
let hasLicense = false;

//Ex.1
if (age >= 18) {

    console.log("You can pass");

    if (hasLicense) {
        console.log("You have your license!");
    } else {
        console.log("You don't have license!");
    }

} else {
    console.log("You must be 16+ to have a license");
}

//Ex.2
if (age >= 18) {
    console.log("You can pass");
} else if (age < 0) {
    console.log("Your age can't be below 0");
}
else {
    console.log("You must be 18+ to enter this site");
}

//Ex.3
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultBtn = document.getElementById("resultBtn");

mySubmit.onclick = function () {

    age = myText.value;
    age = Number(age);

    if (age >= 18) {
        resultBtn.textContent = "You can pass"
    } else if (age < 0) {
        resultBtn.textContent = "Your age can't be below 0"
    } else {
        resultBtn.textContent = "You must be 18+ to enter this site";
    }

}

// Ternary Operator = เป็นรูปแบบย่อของคำสั่ง if{} และ else
//                    ช่วยกำหนดค่าให้ตัวแปรตามเงื่อนไข
//                    เงื่อนไข ? คำสั่งเมื่อเป็นจริง : คำสั่งเมื่อเป็นเท็จ;

//Ex.1
let age = 18;
let message = age >= 18 ? "You're an adult" : "You're a minor";

//Ex.2
let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log("Your total is " + (purchaseAmount - purchaseAmount * (discount / 100)));
// closure = ฟังก์ชันที่ถูกประกาศอยู่ภายในอีกฟังก์ชันหนึ่งโดยฟังก์ชันด้านใน (inner function)
//           สามารถเข้าถึงตัวแปร (ariables) และ ขอบเขตการทำงาน (scope)
//           ของฟังก์ชันด้านนอก (outer function) ได้
//           ช่วยให้สามารถสร้างตัวแปรแบบ private
//           และเก็บสถานะ (state) ของข้อมูลไว้ได้
//           ถูกใช้งานบ่อยใน Framework ของ JavaScript
//           เช่น React, Vue และ Angular

//=====================
// EXAMPLE 1
//=====================

// Outer Function
function outer() {

    // ตัวแปรของ Outer Function
    let message = "Hello";

    // Inner Function
    function inner() {

        // Inner เข้าถึงตัวแปรของ Outer ได้
        console.log(message);

    }

    // ส่ง Inner Function กลับ
    return inner;
}

// เก็บฟังก์ชันที่ return มา
const myFunction = outer();

// แม้ outer() จะทำงานเสร็จแล้ว
// แต่ inner() ยังจำตัวแปร message ได้
myFunction();

// ผลลัพธ์ = Hello

//=====================
// EXAMPLE 2
//=====================

function createCounter() {

    let count = 0;


    function increment() {
        count++;
        console.log(count);
    }

    function getCount() {
        return count;
    }

    return { increment, getCount };

}

const counter = createCounter();

counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3

console.log("The current count is " + counter.getCount()); // The current count is 3

//=====================
// EXAMPLE 3
//=====================

function createGame() {

    let score = 0;

    function increaseScore(point) {
        score += point;
        console.log("+" + point + "pts");
    }

    function decreaseScore(point) {
        score -= point;
        console.log("-" + point + "pts");
    }

    function getScore() {
        return score;
    }

    return { increaseScore, decreaseScore, getScore };

}

const game = createGame();

game.increaseScore(5); // +5pts
game.increaseScore(6); // +6pts
game.decreaseScore(3); // -3pts

console.log("The final score is " + game.getScore() + "pts"); // The final score is 8pts
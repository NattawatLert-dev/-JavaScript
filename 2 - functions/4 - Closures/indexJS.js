// closure = ฟังก์ชันที่ถูกประกาศอยู่ภายในอีกฟังก์ชันหนึ่งโดยฟังก์ชันด้านใน (inner function)
//           สามารถเข้าถึงตัวแปร (variables) และ ขอบเขตการทำงาน (scope)
//           ของฟังก์ชันด้านนอก (outer function) ได้
//           ช่วยให้สามารถสร้างตัวแปรแบบ private
//           และเก็บสถานะ (state) ของข้อมูลไว้ได้
//           ถูกใช้งานบ่อยใน Framework ของ JavaScript
//           เช่น React, Vue และ Angular

//Ex.1
function outer() {

    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();

}

outer(); // Hello

//Ex.2
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

//Ex.3

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